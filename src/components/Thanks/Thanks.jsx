import {useHistory} from 'react-router-dom';

function Thanks () {

    const history = useHistory();

    const handleSubmit = (event) => {
        history.push("/")
    }

    return(
        <>
            <form onSubmit={(event) => handleSubmit(event)}>
            <h1 className="center">Submission Submitted</h1>
            <h1 className="center">Thank You!</h1>
            <button type="submit">Leave New Feedback</button>
            </form>
        </>
    )
}

export default Thanks;