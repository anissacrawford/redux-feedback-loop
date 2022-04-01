import {useHistory} from 'react-router-dom';

function Feeling () {

    const history = useHistory();

    const handleSubmit = (event) => {
        history.push("/understanding")
    }

    return(
        <>
        <form onSubmit={(event) => handleSubmit(event)}>
        <h1 className="center">How are you feeling today?</h1>
        <input type="number"/>

        <button type="submit">NEXT</button>
        </form>
        </>
    )
}

export default Feeling;