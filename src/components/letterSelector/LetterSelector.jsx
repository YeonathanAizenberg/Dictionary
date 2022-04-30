import React, { useState } from 'react';
import { useDataStore } from '../../mobx/context';
import './LetterSelector.css';

const LetterSelector = () => {
    const dataStore = useDataStore()
    const [letter, setLetter] = useState("")

    const onChangeValue = (event) => {
        setLetter(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedQuery = dataStore[1].data[dataStore[1].data.length -1]
        if(letter === "") {
            alert("Please fill the input field")
        } else {
            switch (selectedQuery) {
                case 'start':
                    dataStore[0].bringStart(letter.toUpperCase());
                    break
                case 'letterAppear':
                    dataStore[0].bringLetterAppear(letter.toUpperCase());
                    break
                case 'end':
                    dataStore[0].bringEnd(letter.toUpperCase());
                    break
                case 'conjunction':
                    dataStore[0].bringConjunction(letter.toUpperCase());
                    break
                default:
                    alert("Please select a query!");
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <h1>Choose your letter:</h1>
                <input type="text" value={letter} onChange={onChangeValue} />
            </label>
            <input type="submit" value="Search!" />
        </form>
    );
};

export default LetterSelector;