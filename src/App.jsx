import { useEffect } from "react";
import useSwitch from "./hooks/useSwitch";
import useDate from "./hooks/useDate";
import useCustomPointer from "./hooks/useCustomPointer";

function App() {
    const {value, toggle} = useSwitch();
    const date = useDate();
    const {pointer, position, handlePointer}= useCustomPointer("🔥");

    return <div style={{ cursor: "none", height: "100vh" }}>
        <div>
            <h2>Exercise 1</h2>
            <p>valore: {value.toString()}</p> 
            <button onClick={toggle}>Change</button>
        </div>

        <div>
            <h2>Exercise 2</h2>
            <p>Current Date: {date.toString()}</p>
        </div>

        <div>
            <h2>Exercise 3</h2>
            <div>
                <input type="text" 
                placeholder="Inserisci puntatore" 
                onChange={handlePointer} />
            </div>

            <div 
                style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                pointerEvents: "none",
                transform: "translate(-50%, -50%)",
                fontSize: "2rem",
                }}>
                {pointer}
             </div>

        </div>
    </div>
}

export default App
