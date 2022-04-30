import React from 'react';
import { useDataStore } from '../../mobx/context';
import './QuerySelector.css';

const QuerySelector = () => {
    const dataStore = useDataStore();

    const onChangeValue = (event) => {
        dataStore[1].selectQuery(event.target.value)
    }

    return (
        <>
            <h1>Choose your query:</h1>
            <div onChange={onChangeValue} className="queries-wrapper">
                <label>
                    <input type="radio" value="start" name="gender" /> How many words start with the letter
                </label>

                <label>
                    <input type="radio" value="letterAppear" name="gender" /> How many times does the letter appear in the dictionary?
                </label>

                <label>
                    <input type="radio" value="end" name="gender" /> How many words end with the letter?
                </label>

                <label>
                    <input type="radio" value="conjunction" name="gender" /> How many words have the same letter repeated in conjunction? For instance, the word professor has `ss,` and for that, the count is 1.
                </label>
            </div>
        </>
    );
};

export default QuerySelector;