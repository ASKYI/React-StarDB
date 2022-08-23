import React, { useEffect, useState } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default function ItemList({ onItemSelected, getData, renderItem }) {
  const [itemsList, setItemsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
      .then(items => {
        setItemsList(items);
        setLoading(false);
      })
  }, []);

  const renderItems = () => {
    return itemsList.map((item) => {
      const { id } = item;
      const label = renderItem(item);
      return (
        <li className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}>
          {label}
        </li>
      );
    });
  };

  const items = renderItems();
  return (
    <ul className="item-list list-group">
      {loading ? <Spinner /> : null}
      {loading ? null : items}
    </ul>
  );
}