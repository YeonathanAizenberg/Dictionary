import React, { useState } from 'react';
import { useObserver } from 'mobx-react';
import { useDataStore } from '../../mobx/context';
import DisplayDataWrapper from '../displayDataWrapper/DisplayDataWrapper';
import './DataDisplay.css';

const DataDisplay = () => {
    const dataStore = useDataStore()

    return useObserver(() => (
        <div className='display-data-container'>
            <h1>DataDisplay:</h1>
            {
                dataStore[0].data.map((word, index) => (
                    <DisplayDataWrapper key={index} word={word} />
                ))
            }
        </div>
    ));
};

export default DataDisplay;