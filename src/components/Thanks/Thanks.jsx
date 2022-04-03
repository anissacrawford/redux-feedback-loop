import {useHistory} from 'react-router-dom';

function Thanks () {

    const history = useHistory();

    const handleSubmit = (event) => {
        history.push("/")
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