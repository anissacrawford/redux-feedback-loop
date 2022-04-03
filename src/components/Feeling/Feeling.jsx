import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import React, { useState } from 'react';

function Feeling () {

    const [feelingInput, setFeelingInput] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange= (event) => {
        dispatch({
           type: "SET_FEELINGS",
           payload: feelingInput
       })
       history.push("/understanding")
}

    return(
        <>
        <div>
        <h1 className="center">How are you feeling today?</h1>
        <input type="number" value={feelingInput} onChange={(event) => setFeelingInput(event.target.value)}/>

        <button onClick={(event) => handleChange(event)}>NEXT</button>
        </div>
        </>
    )
}

export default Feeling;