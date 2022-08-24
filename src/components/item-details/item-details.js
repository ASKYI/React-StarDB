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

export default function ItemDetails({ itemId, getData, getImageUrl, children }) {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!itemId) {
      setLoading(false);
      return;
    }
    setLoading(true);

    getData(itemId)
      .then(item => {
        setItem(item);
        setLoading(false);
      })
  }, [itemId]);

  const hasData = itemId && item;
  const spinner = loading ? <Spinner /> : null;

  let content = null;
  if (!loading && hasData) {
    content = <>
      < img className="item-image"
        src={getImageUrl(item)}
      />

      < div className="card-body" >
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, {item});
          })}
        </ul>
        <ErrorButton />
      </div >
    </>
  }

  return (
    itemId ?
      <div className="item-details card" >
        {spinner}
        {content}
      </div > : null
  )
}