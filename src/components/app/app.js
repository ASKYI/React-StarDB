import React, { useState } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';
import ItemList from "../item-list";
import PersonDetails from "../person-details";

const App = () => {
  const swapiService = new SwapiService();
  const [showRandomPlanet, setShowRandomPlanet] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const toggleRandomPlanet = () => {
    setShowRandomPlanet(!showRandomPlanet);
  }

  const planet = showRandomPlanet ?
    <RandomPlanet /> :
    null;

  const onPersonSelected = (id) => {
    setSelectedPerson(id);
  }

  return (
    <div>
      <Header />
      {planet}

      <button
        className="toggle-planet btn btn-warning btn-lg"
        onClick={() => toggleRandomPlanet()}>
        Toggle Random Planet
      </button>

      <PeoplePage />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={onPersonSelected}
            getData={swapiService.getAllPlanets}
            renderItem={({name, diameter}) => `${name} (${diameter})`} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPerson} />
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
          <PersonDetails personId={selectedPerson} />
        </div>
      </div>
    </div>
  );
};

export default App;