import React, { useEffect, useState } from 'react';
import Spinner from '../spinner';

const withDataById = (View, getData, getImage) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = props;

    useEffect(() => {
      async function fetchData() {
        if (!itemId) {
          setLoading(false);
          return;
        }
        setLoading(true);
        const data = await getData(itemId);
        setData(data);
        setImageUrl(getImage(data));
        setLoading(false);
      }
      fetchData();
    }, [itemId]);

    if (loading) {
      return <Spinner />;
    }

    return <View {...props
    } data={data} imageUrl={imageUrl} />;
  };
};

export default withDataById;