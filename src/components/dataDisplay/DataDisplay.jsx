import React, { useState } from 'react';
import { useObserver } from 'mobx-react';
import { useDataStore } from '../../mobx/context';
import DisplayDataWrapper from '../displayDataWrapper/DisplayDataWrapper';
import './DataDisplay.css';

const DataDisplay = () => {
    const dataStore = useDataStore()
    console.log(dataStore[0].data.length)

    return useObserver(() => (
        <div className='display-data-container'>
            <h1>DataDisplay:</h1>
            {dataStore[0].data.length > 0 ? <div className='found-words'>Found {dataStore[0].data.length}</div> : null}
            {
                typeof dataStore[0].data === "number" ?
                    dataStore[0].data
                    :
                    dataStore[0].data.map((word, index) => (
                        <DisplayDataWrapper key={index} word={word} />
                    ))
            }
        </div>
    ));
};

export default DataDisplay;