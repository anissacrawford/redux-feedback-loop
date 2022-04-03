import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import React, { useState } from 'react';

function Understanding (){

    const [understandingInput, setUnderstandingInput] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (understandingInput > 5 || understandingInput == 0){
            alert('Please enter a valid value')
        } else (
        dispatch({
            type: "SET_UNDERSTANDING",
            payload: understandingInput
        }),
        history.push("/support")
        )
    }

    return (
        <>
            <div className="center">
                <h1 className="center">How well are you understanding the content?</h1>
                <input type="number" value={understandingInput} onChange={(event) => setUnderstandingInput(event.target.value)}/>
                <button onClick={(event) => handleChange(event)}>NEXT</button>
            </div>

            <footer className="note">
                <p>PLEASE NOTE: </p>
                <p>A value of 1 (not well) through 5 (extremely well) must be provided before continuing.</p>
            </footer>
        </>
    )
}

export default Understanding;