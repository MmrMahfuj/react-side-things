import React from 'react';
import { addToDb, removeFromDb } from './fakeDb';

const DataShow = (props) => {

    const { _id, company, balance } = props.product;
    const handlePurchase = id => {
        addToDb(id)
    }
    const handleRemove = id => {
        removeFromDb(id);
    }
    return (
        <div>
            <h2>Company Name: {company}</h2>
            <h4>Price: {balance}</h4>
            <p>Product ID: {_id}</p>
            <button onClick={() => handlePurchase(_id)}>Purchase</button>
            <button onClick={() => handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default DataShow;