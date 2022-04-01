import {useHistory} from 'react-router-dom';

function Comments () {

    const history = useHistory();

    const handleSubmit = (event) => {
        history.push("/feedback")
    }

    return (
        <>
         <form onSubmit={(event) => handleSubmit(event)}>
         <h1 className="center">Any comments you want to leave?</h1>
         <input type="number"/>
         <button type="submit">NEXT</button>
         </form>
        </>
    )
}

export default Comments;