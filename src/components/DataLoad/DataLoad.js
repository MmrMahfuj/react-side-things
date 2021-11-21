import React, { useEffect, useState } from 'react';
import DataShow from '../DataShow/DataShow';

const DataLoad = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./myJsonFile.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1>Data Load kora hocche</h1>
            {
                products.map(product => <DataShow product={product} key={product._id}></DataShow>)
            }
        </div>
    );
};

export default DataLoad;