import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';

function Thanks () {

    const history = useHistory();

    const feeling = useSelector(store => store.feelingsReducer)
    const understanding = useSelector(store => store.understandingReducer)
    const support = useSelector(store => store.supportReducer )
    const comments = useSelector(store => store.commentsReducer)

    const handleSubmit = (event) => {
        const feedback = {
            feeling: feeling, 
            understanding: understanding,
            support: support, 
            comments: comments, 
    };
        axios.post('/feedback',feedback)
        .then(response => {
            history.push("/")
        }).catch(err => {
            console.log(err);
        })
         
    }

    return(
        <>
            <div>
            <h1 className="center">Submission Submitted</h1>
            <h1 className="center">Thank You!</h1>
            <button onClick={(event) => handleSubmit(event)}>Leave New Feedback</button>
            </div>
        </>
    )
}

export default Thanks;