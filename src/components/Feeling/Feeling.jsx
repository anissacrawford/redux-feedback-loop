import {useHistory} from 'react-router-dom';

function Feeling () {

    const [feelingInput, setFeelingToAdd] = useState('')

    const history = useHistory();

    const handleFeelingChange = (event) => {
           dispatch({
               type: "SET_FEELINGS",
               payload: feelingInput
           })
    }

    const handleSubmit = (event) => {
        history.push("/understanding")
        setFeelingToAdd = event.target.value
    }

    return(
        <>
        <form onSubmit={(event) => handleSubmit(event)}>
        <h1 className="center">How are you feeling today?</h1>
        <input type="number" onChange={handleFeelingChange}/>

        <button type="submit">NEXT</button>
        </form>
        </>
    )
}

export default Feeling;