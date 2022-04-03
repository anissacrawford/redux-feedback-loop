import {useHistory} from 'react-router-dom';

import {Button} from '@material-ui/core';
import  {createTheme, ThemeProvider} from '@material-ui/core/styles';

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
            <div className="center">
                <h1>Your feedback was submitted!</h1>
                <h2>Thank You</h2>

                <div>
                    <Button variant="outlined" color="primary" onClick={(event) => handleSubmit(event)}>Leave New Feedback</Button>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Thanks;