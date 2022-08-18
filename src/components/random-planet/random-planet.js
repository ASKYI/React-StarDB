import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';

export default function RandomPlanet() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [rotation, setRotation] = useState("");
  const [diameter, setDiameter] = useState("");
  const swapiService = new SwapiService();

  useEffect(() => {
    const idLocal = Math.floor(Math.random() * 25) + 2;
    swapiService.getPlanet(idLocal)
      .then((planet) => {
        setId(idLocal);
        setName(planet.name);
        setPopulation(planet.population);
        setRotation(planet.rotation_period);
        setDiameter(planet.diameter);
      });
  }, []);

  return (
    <div className="random-planet jumbotron rounded">
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
    </div>
  );
}