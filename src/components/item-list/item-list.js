import React from 'react';
import SwapiService from '../../services/swapi-service';
import withData from '../hoc-helpers/with-data';
import './item-list.css';

const ItemList = ({ onItemSelected, itemsList, children: renderLabel }) => {
  const items = itemsList.map((item) => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
}

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);