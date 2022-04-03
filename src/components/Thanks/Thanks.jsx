import {useHistory} from 'react-router-dom';

function Thanks () {

    const history = useHistory();

    const handleSubmit = (event) => {
        history.push("/")
    }

    return(
        <>
            <div>
                <h1 className="center">Feedback Submitted!</h1>
                <h2 className="center">Thank You</h2>

                <div className="center">
                    <button onClick={(event) => handleSubmit(event)}>Leave New Feedback</button>
                </div>
            </div>
        </>
    )
}

export default Thanks;