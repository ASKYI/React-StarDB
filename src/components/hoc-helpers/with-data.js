import React, { useEffect, useState } from 'react';
import Spinner from '../spinner';

const withData = (View) => {
    return (props) => {
        const [data, setData] = useState(null);
        const { getData } = props;

        useEffect(() => {
            getData()
                .then((data) => {
                    setData(data);
                })
        }
        );

        if (!data) {
            return <Spinner />;
        }

        return <View {...props} data={data} />;
    }
};

export default withData;