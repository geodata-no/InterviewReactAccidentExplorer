import { useEffect } from 'react';

// arcgis api
import Point from '@arcgis/core/geometry/Point';
import * as reactiveUtils from '@arcgis/core/core/reactiveUtils.js';
import '@arcgis/map-components/components/arcgis-map';
import '@arcgis/map-components/components/arcgis-zoom';

// app
import { initExtent, basemapNorway, layerNVDB } from './mapConfig';

//css
import './MapContainer.css';

// NOTE:
// This file is using ArcGIS JS API to create a map with a basemap and accident layer,
// Candidate does not need to change this file, or understand the map API used

const MapContainer = ({ setAccidents, location }) => {
  // configure map and add listeners
  const onViewReady = (view) => {
    view.map.add(layerNVDB);
    view.whenLayerView(layerNVDB).then((layerView) => {
      // hash fields for fast lookup
      const _fieldsHash = [];
      layerView.layer.fields.forEach((field) => {
        if (field.domain && field.domain?.type === 'coded-value') {
          _fieldsHash[field.name] = field.domain;
        }
      });

      // return attributes where domain codes changed to domain values
      const _getAttributesWithDomainValue = (attributes) => {
        var attributesWithDomainValues = [];
        for (const [key, value] of Object.entries(attributes)) {
          attributesWithDomainValues[key] = _fieldsHash[key]?.getName(value) ?? value;
          if (key.indexOf('__Ny_') > -1) {
            const newKey = key.replace('__Ny_', '');
            attributesWithDomainValues[newKey] = value;
            delete attributesWithDomainValues[key];
          }
        }
        return attributesWithDomainValues;
      };

      // query for accident data when view is updating
      reactiveUtils.watch(
        () => view.updating,
        (updating) => {
          if (!updating) {
            layerView
              .queryFeatures({
                outFields: layerView.availableFields,
                geometry: view.extent,
                returnGeometry: true,
              })
              .then((results) => {
                const accidentData = results.features.map((feature) => {
                  const attr = feature.attributes;
                  attr.x = Math.trunc(feature.geometry?.x ?? 0);
                  attr.y = Math.trunc(feature.geometry?.y ?? 0);
                  return _getAttributesWithDomainValue(attr);
                });
                setAccidents(accidentData);
              })
              .catch((error) => {
                console.log('query failed: ', error);
              });
          }
        },
      );
    });
  };

  // // Task: goTo location in map
  useEffect(() => {
    const view = document.querySelector('arcgis-map')?.view;

    if (view && location) {
      view.graphics.removeAll();

      // create point at goTo location
      const pt = new Point(location);
      pt.spatialReference = view.spatialReference;

      // use ArcGIS API to got to location
      view
        .goTo(
          {
            center: pt,
            zoom: 15,
          },
          { duration: 0 },
        )
        .catch(function (error) {
          if (error.name !== 'AbortError') {
            console.error(error);
          }
        });
    }
  }, [location]);

  return (
    <arcgis-map
      onarcgisViewReadyChange={(e) => {
        onViewReady(e.target.view);
      }}
      extent={initExtent}
      basemap={basemapNorway}
      style={{ width: '50%', height: '100%' }}
    >
      <arcgis-zoom></arcgis-zoom>
    </arcgis-map>
  );
};

export default MapContainer;
