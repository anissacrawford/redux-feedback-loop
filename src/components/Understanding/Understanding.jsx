import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import React, { useState } from 'react';

function Understanding (){

    const [understandingInput, setUnderstandingInput] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({
            type: "SET_UNDERSTANDING",
            payload: understandingInput
        })
        history.push("/support")
    }

    return (
        <>
         <div>
         <h1 className="center">How well are you understanding the content?</h1>
         <input type="number" value={understandingInput} onChange={(event) => setUnderstandingInput(event.target.value)}/>

         <button onClick={(event) => handleChange(event)}>NEXT</button>
         </div>
        </>
    )
}

export default Understanding;