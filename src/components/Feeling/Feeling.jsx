import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import React, { useState } from 'react';

import {Button} from '@material-ui/core';
import  {createTheme, ThemeProvider} from '@material-ui/core/styles'
import swal from 'sweetalert';
import Input from '@material-ui/core/Input';

const theme = createTheme({
  palette: {
    primary: {
      main: '#AF8AE4'
    }
  }
})

function Feeling () {

    const [feelingInput, setFeelingInput] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();
    const ariaLabel = { 'aria-label': 'description' };

    const handleChange= (event) => {
        if (feelingInput > 5 || feelingInput == 0){
            swal({
                title: "Uh Oh!",
                text: "Please enter a valid response",
                icon: "error",
                button: "Okay",
            });
        } else (
        dispatch({
           type: "SET_FEELINGS",
           payload: feelingInput
       }),
       history.push("/understanding")
       )
}

    return(
        <ThemeProvider theme={theme}>
            <div className="center">
                <h1>How are you feeling today?</h1>
                <h2></h2>
                <Input placeholder="on a scale of 1-5"  inputProps={{ 'aria-label': 'description' }}  type="number" value={feelingInput} onChange={(event) => setFeelingInput(event.target.value)}/>
                <Button variant="outlined" color="primary" onClick={(event) => handleChange(event)}>NEXT</Button>
            </div>
        </ThemeProvider>
    )
}

export default Feeling;