import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import React, { useState } from 'react';

function Support () {

    const [supportInput, setSupportInput] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({
            type: "SET_SUPPORT",
            payload: supportInput
        })
        history.push("/comments")
    }

    return (
        <>
         <div>
         <h1 className="center">How well are you being supported?</h1>
         <input type="number" value={supportInput} onChange={(event) => setSupportInput(event.target.value)}/>

         <button onClick={(event) => handleChange(event)}>NEXT</button>
         </div>
        </>
    )
}

export default Support;