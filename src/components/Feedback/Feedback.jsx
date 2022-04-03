import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';


function Feedback (){

    const feeling = useSelector(store => store.feelingsReducer)
    const understanding = useSelector(store => store.understandingReducer)
    const support = useSelector(store => store.supportReducer )
    const comments = useSelector(store => store.commentsReducer)

    const history = useHistory();

    const handleSubmit = (event) => {
        history.push("/thanks")
    }

    return (
        <>
        <div>
        <h1 className="center">Review Your Feedback</h1>
        <h2 className="center">Feelings: {feeling}</h2>
        <h2 className="center">Understanding: {understanding}</h2>
        <h2 className="center">Support: {support}</h2>
        <h2 className="center">Comments: {comments}</h2>
        <button onClick={(event) => handleSubmit(event)}>SUBMIT</button>
        </div>
        </>
    )
}

export default Feedback;