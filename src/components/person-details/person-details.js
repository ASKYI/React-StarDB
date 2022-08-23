import React, { useEffect, useState } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './person-details.css';

export default function PersonDetails({ personId }) {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!personId) {
      setLoading(false);
      return;
    }
    const swapiService = new SwapiService();
    setLoading(true);

    swapiService.getPerson(personId)
      .then(person => {
        setPerson(person);
        setLoading(false);
      })
  }, [personId]);

  const hasData = personId && person;
  const spinner = loading ? <Spinner /> : null;
  let content = null;
  if (!loading && hasData) {
    const { id, name, gender, birthYear, eyeColor } = person;
    content = <>
      < img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
        } />

      < div className="card-body" >
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div >
    </>;
  }

  return (
    personId ?
      <div className="person-details card" >
        {spinner}
        {content}
      </div > : null
  )
}