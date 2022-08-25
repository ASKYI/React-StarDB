import React, { Component, useEffect, useState } from 'react';
import Spinner from '../spinner';

const withDataById = (View, getData, getImage) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = props;

    useEffect(() => {
      if (!itemId) {
        setLoading(false);
        return;
      }
      setLoading(true);
      getData(itemId)
        .then((data) => {
          setData(data);
          setImageUrl(getImage(data));
          setLoading(false);
        });
    }, [itemId]);

    if (!data || loading) {
      return <Spinner />;
    }

    return <View {...props
    } data={data} imageUrl={imageUrl} />;
  };
};

export default withDataById;