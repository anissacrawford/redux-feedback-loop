import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import React, { useState } from 'react';

function Comments () {

    const [commentInput, setCommentInput] = useState('')

    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch({
            type: "SET_COMMENTS", 
            payload: commentInput
        })
        history.push("/feedback")
    }

    return (
        <>
         <div>
         <h1 className="center">Any comments you want to leave?</h1>
         <input type="text" value={commentInput} onChange={(event) => setCommentInput(event.target.value)}/>

         <button onClick={(event) => handleChange(event)}>NEXT</button>
         </div>
        </>
    )
}

export default Comments;