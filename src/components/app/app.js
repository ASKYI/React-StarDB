import React, { useState } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorBoundry from '../error-boundry';

import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
import PeoplePage from '../people-page';
import StarshipsPage from '../starships-page';
import PlanetsPage from '../planets-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const PageEnum = {
  PLANETS: 0,
  PEOPLE: 1,
  STARSHIPS: 2
};

const App = () => {
  const swapiService = new SwapiService();

  return (
    <ErrorBoundry>
      <SwapiServiceProvider value={swapiService}>
        <Router>
          <div className='stardb-app'>
            <Header/>
            <RandomPlanet />
            <Routes>
              <Route path="/" element={<h2>Welcome to Star DB</h2>}></Route>
              <Route path="/people" element={<PeoplePage/>}></Route>
              <Route path="/planets" element={<PlanetsPage/>}></Route>
              <Route path="/starships" element={<StarshipsPage/>}></Route>
            </Routes>
          </div>
        </Router>
      </SwapiServiceProvider>
    </ErrorBoundry>
  );
};

export default App;