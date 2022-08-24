import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default function RandomPlanet() {
  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const swapiService = new SwapiService();

  const onPlanetLoaded = (planet) => {
    setPlanet(planet);
    setLoading(false);
    setError(false);
  };

  const onError = (err) => {
    setError(true);
    setLoading(false);
  }

  const updatePlanet = () => {
    const idLocal = Math.floor(Math.random() * 25) + 3;
    swapiService.getPlanet(idLocal)
      .then(onPlanetLoaded)
      .catch(onError);
  }

  useEffect(() => {
    const interval = setInterval(updatePlanet, 2500);
    
    return () => {
      clearInterval(interval);
    }
  }, []);

  const hasData = !loading && !error;
  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorIndicator /> : null;
  const content = hasData ? <PlanetView planet={planet} /> : null;

  return (
    <div className="random-planet jumbotron rounded">
      {spinner}
      {errorMessage}
      {content}
    </div>
  );
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotation, diameter } = planet;
  return (
    <>
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotation}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
}