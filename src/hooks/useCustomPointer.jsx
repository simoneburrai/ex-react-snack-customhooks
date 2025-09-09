import { useEffect, useState } from "react";

export default function useCustomPointer(defaultPointer = ""){
    const [position, setPosition]= useState({x: 0, y: 0});
    const [pointer, setPointer] = useState(defaultPointer);

    const handleMousePosition = (e)=> {
        setPosition({x: e.clientX, y: e.clientY});
    }
    
    useEffect(()=>{
        window.addEventListener("mousemove", handleMousePosition);
        return ()=>{
            window.removeEventListener("mousemove", handleMousePosition);
        }
    }, [])

    


    const handlePointer = (e)=> {
            setPointer(e.target.value);
        }
        

    return {pointer, position, handlePointer};
}


// 🏆 Snack 3: useCustomPointer() – Cambia il Cursore del Mouse
// Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

// Cosa deve fare?

// Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
// Posiziona il componente al posto del puntatore del mouse.
// Il componente segue i movimenti del mouse.
// Esempio di utilizzo:

// import useCustomPointer from "./useCustomPointer";

// function App() {
//   const customPointer = useCustomPointer("🔥");

//   return (
//     <div>
//       <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
//       {customPointer}
//     </div>
//   );
// }
