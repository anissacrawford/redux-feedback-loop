import {useHistory} from 'react-router-dom';

function Support () {

    const history = useHistory();

    const handleSubmit = (event) => {
        history.push("/comments")
    };
    
    return (
        <>
         <form onSubmit={(event) => handleSubmit(event)}>
         <h1 className="center">How well are you being supported?</h1>
         <input type="number"/>

         <button type="submit">NEXT</button>
         </form>
        </>
    )
}

export default Support;