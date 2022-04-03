import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import React, { useState } from 'react';

function Feeling () {

    const [feelingInput, setFeelingInput] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange= (event) => {
        if (feelingInput > 5 || feelingInput == 0){
            alert('Please enter a valid value')
        } else (
        dispatch({
           type: "SET_FEELINGS",
           payload: feelingInput
       }),
       history.push("/understanding")
       )
}

    return(
        <>
            <div className="center">
                <h1>How are you feeling today?</h1>
                <input type="number" value={feelingInput} onChange={(event) => setFeelingInput(event.target.value)}/>
                <button onClick={(event) => handleChange(event)}>NEXT</button>
            </div>

            <footer className="note">
                <p>PLEASE NOTE: </p>
                <p>A value of 1 (not well) through 5 (extremely well) must be provided before continuing.</p>
            </footer>
        </>
    )
}

export default Feeling;