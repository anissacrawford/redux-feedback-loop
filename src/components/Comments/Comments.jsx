import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import React, { useState } from 'react';

import {Button} from '@material-ui/core';
import  {createTheme, ThemeProvider} from '@material-ui/core/styles'
import Input from '@material-ui/core/Input';

const theme = createTheme({
  palette: {
    primary: {
      main: '#AF8AE4'
    }
  }
})

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
        <ThemeProvider theme={theme}>
            <div className="center">
                <h1>Any comments you want to leave?</h1>
                <Input placeholder="optional" inputProps={{ 'aria-label': 'description' }} type="text" value={commentInput} onChange={(event) => setCommentInput(event.target.value)}/>
                <Button variant="outlined" color="primary" onClick={(event) => handleChange(event)}>NEXT</Button>
            </div>
        </ThemeProvider>
    )
}

export default Comments;