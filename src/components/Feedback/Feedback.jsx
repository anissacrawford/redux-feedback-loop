import {useHistory} from 'react-router-dom';

function Feedback (){

    const history = useHistory();

    const handleSubmit = (event) => {
        history.push("/thanks")
    }

    return (
        <>
        <div onClick={(event) => handleSubmit(event)}>
        <h1 className="center">Review Your Feedback</h1>
        <h2 className="center">Feelings:</h2>
        <h2 className="center">Understanding:</h2>
        <h2 className="center">Support:</h2>
        <h2 className="center">Comments:</h2>
        <button type="submit">SUBMIT</button>
        </div>
        </>
    )
}

export default Feedback;