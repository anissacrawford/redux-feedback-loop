import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios';

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
        <>
            <div>
                <h1 className="center">Review Your Feedback</h1>
                <h2 className="center">Feelings: {feeling}</h2>
                <h2 className="center">Understanding: {understanding}</h2>
                <h2 className="center">Support: {support}</h2>
                <h2 className="center">Comments: {comments}</h2>
                
                <div className="center">
                    <button onClick={(event) => handleSubmit(event)}>SUBMIT</button>
                </div>
            </div>
        </>
    )
}

export default Feedback;