import React, { useState } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import SwapiService from '../../services/swapi-service';
import Row from "../row";
import ItemDetails from "../item-details";
import { Record } from "../item-details/item-details";
import { PersonList, PlanetList, StarshipList } from '../sw-components';
import ErrorBoundry from '../error-boundry';

const App = () => {
  const swapiService = new SwapiService();
  const { getPerson, getStarship, getPersonImage, getStartshipImage, getPlanetImage } = swapiService;
  const [showRandomPlanet, setShowRandomPlanet] = useState(true);

  const toggleRandomPlanet = () => {
    setShowRandomPlanet(!showRandomPlanet);
  }

  const planet = showRandomPlanet ?
    <RandomPlanet /> :
    null;

  const personDetails = (
    <ItemDetails
      itemId={11}
      getData={getPerson}
      getImageUrl={getPersonImage}>
      <Record field="gender" label="Gender"></Record>
      <Record field="eyeColor" label="Eye color"></Record>
    </ItemDetails>
  );
  const starshipDetails = (
    <ItemDetails
      itemId={5}
      getData={getStarship}
      getImageUrl={getStartshipImage}>
      <Record field="model" label="Model"></Record>
      <Record field="length" label="Length"></Record>
      <Record field="costInCredits" label="Cost"></Record>
    </ItemDetails>
  );

  return (
    <ErrorBoundry>
      <div className='stardb-app'>
        <Header />
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={() => toggleRandomPlanet()}>
          Toggle Random Planet
        </button>

        <PersonList>
          {({ name }) => <span>{name}</span>}
        </PersonList>

        <StarshipList>
          {({ name }) => <span>{name}</span>}
        </StarshipList>

        <PlanetList>
          {({ name }) => <span>{name}</span>}
        </PlanetList>

        {/* <PeoplePage /> */}
        {/* <Row
        left={personDetails}
        right={starshipDetails}
      />
      </div>
       */}
        {/* <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={onPersonSelected}
            getData={swapiService.getAllPlanets}
            renderItem={({name, diameter}) => `${name} (${diameter})`} />
        </div>
        <div className="col-md-6">
          <ItemDetails itemId={selectedPerson} />
        </div>
      </div>

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={onPersonSelected}
            getData={swapiService.getAllStarships}
            renderItem={({name, model}) => `${name} (${model})`} />
        </div>
        <div className="col-md-6">
          <ItemDetails itemId={selectedPerson} />
        </div>
      </div> */}
      </div>
    </ErrorBoundry>
  );
};

export default App;