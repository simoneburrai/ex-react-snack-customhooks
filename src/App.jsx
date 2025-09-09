import { useEffect } from "react";
import useSwitch from "./hooks/useSwitch";
import useDate from "./hooks/useDate";

function App() {
    const {value, toggle} = useSwitch();
    const date = useDate();

    useEffect(()=>{
        console.log(value);
    }, [value])


    return <div>
        <div>
            <h2>Exercise 1</h2>
            <p>valore: {value.toString()}</p> 
            <button onClick={toggle}>Change</button>
        </div>

        <div>
            <h2>Exercise 2</h2>
            <p>Current Date: {date.toString()}</p>
        </div>
    </div>
}

export default App
