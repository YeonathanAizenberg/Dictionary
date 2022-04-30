import React from 'react';
import './DisplayDataWrapper.css';

const DisplayDataWrapper = ({word}) => {

    return (
        <div className='word-wrapper'>
            <div className='main'>{word[0]}</div>
            <div className='explanation'>{word[1]}</div>
        </div>
    );
};

export default DisplayDataWrapper;