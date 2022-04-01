import {useHistory} from 'react-router-dom';

function Understanding (){

    const history = useHistory();

    const handleSubmit = (event) => {
        history.push("/support")
    }

    return (
        <>
         <form onSubmit={(event) => handleSubmit(event)}>
         <h1 className="center">How well are you understanding the content?</h1>
         <input type="number"/>
         <button type="submit">NEXT</button>
         </form>
        </>
    )
}

export default Understanding;