import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import React, { useState } from 'react';

function Support () {

    const [supportInput, setSupportInput] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (supportInput > 5 || supportInput == 0){
            alert('Please enter a valid value')
        } else (
        dispatch({
            type: "SET_SUPPORT",
            payload: supportInput
        }),
        history.push("/comments")
        )
    }

    return (
        <>
            <div className="center">
                <h1 className="center">How well are you being supported?</h1>
                <input type="number" value={supportInput} onChange={(event) => setSupportInput(event.target.value)}/>
                <button onClick={(event) => handleChange(event)}>NEXT</button>
            </div>  

            <footer className="note">
                <p>PLEASE NOTE: </p>
                <p>A value of 1 (not well) through 5 (extremely well) must be provided before continuing.</p>
            </footer>
        </>
    )
}

export default Support;