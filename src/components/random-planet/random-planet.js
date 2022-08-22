import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';
import Spinner from '../spinner';

export default function RandomPlanet() {
  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const swapiService = new SwapiService();

  const onPlanetLoaded = (planet) => {
    setPlanet(planet);
    setLoading(false);
  };

  useEffect(() => {
    const idLocal = Math.floor(Math.random() * 25) + 2;
    swapiService.getPlanet(idLocal)
      .then(onPlanetLoaded);
  }, []);

  const spinner = loading ? <Spinner /> : null;
  const content = loading ? null : <PlanetView planet={planet} />;
  return (
    <div className="random-planet jumbotron rounded">
      {spinner}
      {content}
    </div>
  );
}

const PlanetView = ({ planet }) => {
  const {id, name, population, rotation, diameter} = planet;
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