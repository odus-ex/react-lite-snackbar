// This is temp component for story book
import {Snackbar} from "../components/Snackbar";
import {useState} from 'react';



export const SnackbarExample = () => {

    const [showSnack, setShowSnack] = useState(false);

    const handleSnackbarPop = () => {
        setShowSnack(!showSnack);
    }


    return(
        <div>
            <button onClick={handleSnackbarPop}>
                Pop some snacks
            </button>

            <Snackbar open={showSnack} />
        </div>
    )
}
