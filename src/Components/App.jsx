import React, { useState } from 'react';
// app components
import HomeTask from './HomeTask/HomeTask';
import Map from './Map/MapContainer';

function App() {
  const [accidents, setAccidents] = useState([]);
  const [location, setLocation] = useState(null);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Map setAccidents={setAccidents} location={location} />
      <HomeTask accidents={accidents} setLocation={setLocation} />
    </div>
  );
}

export default App;
