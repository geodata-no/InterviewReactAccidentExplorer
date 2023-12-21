# HomeTask: Accident Explorer

I Geodata AS jobber vi med mange prosjekter som er basert på f.eks [React](https://reactjs.org/) eller [Vue](https://vuejs.org/).<br />
Dette prosjektet er basert på React og benytter [Vite](https://vitejs.dev/) som byggverktøy.<br />

Det anbefales å benytte [Visual Studio Code](https://code.visualstudio.com/)(gratis), evt annen IDE du kjenner. Du vil også trenge å ha installert *git*, *node* og *npm* på din maskin for å løse oppgaven.

> **Note:**<br />
> Vite 5 støtter Node.js v.18/v.20+.<br />

*Du bør ikke bruke mer enn maks 4 timer, så du rekker kanskje ikke alt eller alt du hadde tenkt du skulle gjøre. Står du fast, så kan du ta neste oppgave. Men du kan gjerne ha tenkt igjennom de gjenværende oppgavene, slik at du kan forklare hvordan du ville ha løst dem.
Fokuser på struktur og kodekvalitet, fremfor å ha løst mest mulig oppgaver.*
<br />
<br />
## Bakgrunn

Du skal bygge videre på en allerede kjørende react web applikasjon.
Applikasjon består av 2 deler, en kartdel og datavisningsdel. 
Kartet er basert på Esri ArcGIS Maps SDK for Javascript.
Oppgaven består i å lage datavisningsdelen.

Data i er hentet fra Nasjonal Vegdatabase (NVDB) og består av ulykker registert hos NVDB i perioden etter 01.01.2020. Disse er ulykkene er vist som røde punkter i kartet. Når kartet oppdateres(panorere, zoom osv), hentes det ut data for alle punkter vist i kartet, og disse sendes til datavisningskomponenten.

## Last ned repository (kode) lokalt
En kort følger beskrivelse om du trenger hjelp til å opprette ditt eget repo du kan dele med oss og å laste ned koden lokalt til din maskin.

1. Fork dette repository. Trykk på _'Fork'_ knappen og _'Create fork'_.   
   Da lager du en kopi i din egen githubkonto.
2. Gå til ditt eget nye repository i github
3. Clone ditt eget repository, slik at du har en kopi lokalt på din maskin.   
   Kopier stien til **ditt repository** ved å klikke på knappen _Code_.
4. ```
   // I cmd window(windows), vs code Terminal vindu el.l.:
   >git clone https://github.com/<din bruker>/InterviewReactAccidentExplorer.git

   >cd InterviewReactAccidentExplorer
   ```

1. Når du senere gjør _'git push'_ av dine commits, pusher du da endringer til ditt eget repository.


## Kom i gang
Start løsningen og gjør deg kjent med koden.

```
// I cmd window(windows), vs code Terminal vindu el.l.:
// før du starter løsningen må du laste ned npm pakker
>npm install

// start løsningen lokalt
>npm start

// bygg løsningen (for deploy, ikke nødvendig for å løse oppgaven)
npm run build

// kjør produksjonsverjon(bygd) løsningen lokalt
npm run serve

// kjør tester
npm run test
```

Det forventes __ikke__ at du skal forstå bruk av ArcGIS Maps SDK for Javascript. Men er du nysgjerrig er hele API'et dokumentert [her](https://developers.arcgis.com/javascript/latest/)

__Ikke bruk ferdige komponenter, bibliotek eller design rammeverk__ for å løse oppgaven.

Du styrer selv hvordan du vil lage datavisningsdelen. __Fokuser på funksjonalitet, før design__. Men vis oss gjerne at du klarer å lage et godt UI også.

### Eksempel:
![example_solution](example%20solution.png)


## Oppgave 1 - Listevisning
Lag en liste med visning av ulykkesdata.

Data skal være alltid være sortert på dato for ulykken, siste ulykke først. Sorter på feltet __'Ulykkesdato'__.

Hver ulykke bør vise f.eks kommunenavn og dato for ulykken.

## Oppgave 2 - Expand/Collapse
Ved å klikke på en ulykke skal man kunne se resterende data for ulykken. Lag en collapse/expand ("vis"/"skjul" data for ulykke) funksjonalitet når bruker klikker på tittelen du opprettet.

## Oppgave 3 - Filtrering
Det kan bli mye data dersom man zoomer deg ut i kartet, så bruker ønsker å kunne filtrere lista basert på feltet "Fartsgrense". F.eks bare kunne se ulykker med fartsgrense "100" (km/t) i lista.
Det bør også være et eget alternativ for å se alle data, altså ufiltrert (default). 

## Oppgave 4 - Første ulykke alltid expanded
Når nye data hentes, altså kartområdet endres, skal første ulykke alltid være expanded(oppslått). Alle andre ulykker er collapsed.

Bruker vil også at den kun er en ulykke som kan være expanded om gangen, så klikker bruker på en ulykke for å se alle ulykkesdata, må evt andre åpnede ulykker lukkes.

## Oppgave 5 - Knapp: "Zoom til lokasjon"
Lag en knapp som skal kunne zoome til valgt ulykke i kartet.
<br />
Komponenten __HomeTask__ mottar et props objekt i konstruktør. __*setLocation*__ er en funksjon som vil sende input parameter(*location objektet*) til kartkomponenten, og kartet vil da zoome til lokasjonen(ulykken) sendt inn. Koordinatene du skal bruke finner i objektet for hver ulykke.

```javascript
// Eks: bruk av setLocation
const location = {x:263157, y:6649000}

setlocation(location)
```

## Oppgave 6 - Unit test av filtreringslogikk
Har du kommet helt hit har du antagelig jobbet endel med React tidligere (har du ikke erfaring med å skrive tester, kan du bare hoppe over denne oppgaven). 
<br />
Så en siste utfordring følger:
<br />
Det eksisterer allerede en enkel test __HomeTask.test.jsx__. Lag en en ny testfil med en test av filtreringslogikken du lagde i oppgave 3.
[Vitest](https://vitest.dev/) og [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) er allerede satt opp.

<br />
<br />

>__NB__: 
>- Last opp din kode i GitHub eller lignende i et *private repo*. 
>  <br />Husk å dele ditt repository med oss *senest kl 09* siste arbeidsdag før intervjuet med oss (såfremt ikke annet tidspunkt er avtalt). Send oss også en epost.
>
>- Ta med din egen pc på intervjuet med oss, slik at du kan presentere det du har gjort 
>
>- Likte du oppgaven? Var noe uklart? Vi tar gjerne imot innspill for å gjøre den bedre!<br/><br/>
