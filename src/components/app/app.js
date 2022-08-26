import React, { useState } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import Row from "../row";
import { Record } from "../item-details/item-details";
import { PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList } from '../sw-components';
import ErrorBoundry from '../error-boundry';

import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

const App = () => {
  const swapiService = new SwapiService();
  const [showRandomPlanet, setShowRandomPlanet] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState(11);
  const [selectedPlanet, setSelectedPlanet] = useState(5);
  const [selectedStarship, setSelectedStarship] = useState(5);

  const toggleRandomPlanet = () => {
    setShowRandomPlanet(!showRandomPlanet);
  }

  const planet = showRandomPlanet ?
    <RandomPlanet /> :
    null;

  const personList = (
    <PersonList onItemSelected={(id) => setSelectedPerson(id)} />
  );
  const personDetails = (
    <PersonDetails itemId={selectedPerson}>
      <Record field="gender" label="Gender"></Record>
      <Record field="eyeColor" label="Eye color"></Record>
    </PersonDetails>
  );

  const starshipList = (
    <StarshipList onItemSelected={(id) => setSelectedStarship(id)} />
  );
  const starshipDetails = (
    <StarshipDetails itemId={selectedStarship}>
      <Record field="model" label="Model"></Record>
      <Record field="length" label="Length"></Record>
      <Record field="costInCredits" label="Cost"></Record>
    </StarshipDetails>
  );

  const planetList = (
    <PlanetList onItemSelected={(id) => setSelectedPlanet(id)} />
  );
  const planetDetails = (
    <PlanetDetails itemId={selectedPlanet}>
      <Record field="population" label="Population"></Record>
      <Record field="rotationPeriod" label="Rotation"></Record>
      <Record field="diameter" label="Diameter"></Record>
    </PlanetDetails>
  );

  return (
    <ErrorBoundry>
      <SwapiServiceProvider value={swapiService}>
        <div className='stardb-app'>
          <Header />
          {planet}

          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={() => toggleRandomPlanet()}>
            Toggle Random Planet
          </button>

          <Row
            left={personList}
            right={personDetails} >
          </Row>
          <Row
            left={starshipList}
            right={starshipDetails} >
          </Row>
          <Row
            left={planetList}
            right={planetDetails} >
          </Row>
        </div>
      </SwapiServiceProvider>
    </ErrorBoundry>
  );
};

export default App;