import React, { useEffect, useState } from 'react';
import Spinner from '../spinner';

const withData = (View, getData) => {
    return () => {
        const [data, setData] = useState(null);

        if (!data) {
            return <Spinner />;
        }

        useEffect(() => {
            getData()
                .then((data) => {
                    setData(data);
                })
        }, []);

        return <View {...this.props} data={data}></View>
    };
};

export default withData;