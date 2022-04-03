import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios';

import {Button} from '@material-ui/core';
import  {createTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#AF8AE4'
    }
  }
})

function Feedback (){

    const feeling = useSelector(store => store.feelingsReducer)
    const understanding = useSelector(store => store.understandingReducer)
    const support = useSelector(store => store.supportReducer )
    const comments = useSelector(store => store.commentsReducer)

    const history = useHistory();

    const handleSubmit = (event) => {
        const feedback = {
            feeling: feeling, 
            understanding: understanding,
            support: support, 
            comments: comments, 
    };
        axios.post('/feedback',feedback)
        .then(response => {
            history.push("/thanks")
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <div>
                <h1 className="center">Review Your Feedback</h1>
                <h2 className="center">Feeling: {feeling}</h2>
                <h2 className="center">Understanding: {understanding}</h2>
                <h2 className="center">Support: {support}</h2>
                <h2 className="center">Comments: {comments}</h2>
                
                <div className="center">
                    <Button variant="outlined" color="primary"  onClick={(event) => handleSubmit(event)}>SUBMIT</Button>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Feedback;