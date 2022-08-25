import React, { useEffect, useState } from 'react';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};
export { Record };

export default function ItemDetails({ data: item, imageUrl, children }) {
  const content = <>
    < img className="item-image"
      src={imageUrl}
    />

    < div className="card-body" >
      <h4>{item.name}</h4>
      <ul className="list-group list-group-flush">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { item });
        })}
      </ul>
      <ErrorButton />
    </div >
  </>;

  return (
    <div className="item-details card" >
      {content}
    </div>
  );
}