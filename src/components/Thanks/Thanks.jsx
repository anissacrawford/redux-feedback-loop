import {useHistory} from 'react-router-dom';

import {Button} from '@material-ui/core';
import  {createTheme, ThemeProvider} from '@material-ui/core/styles'


const theme = createTheme({
  palette: {
    primary: {
      main: '#AF8AE4'
    }
  }
})

function Thanks () {

    const history = useHistory();

    const handleSubmit = (event) => {
        history.push("/")
    }

    return(
        <ThemeProvider theme={theme}>
            <div>
                <h1 className="center">Feedback Submitted!</h1>
                <h2 className="center">Thank You</h2>

                <div className="center">
                    <Button variant="outlined" color="primary" onClick={(event) => handleSubmit(event)}>Leave New Feedback</Button>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Thanks;