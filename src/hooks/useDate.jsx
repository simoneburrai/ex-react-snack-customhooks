import { useEffect, useState } from "react";

export default function useDate(){
    const [date, setDate] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setDate(new Date())
        }, 1000)
        return ()=>clearInterval(interval)
    }, [])

    return date;
    
}// Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.

// Cosa deve fare?

// Restituisce un oggetto con data e ora formattata.
// Si aggiorna automaticamente ogni secondo.
// Usa useEffect() per gestire l’aggiornamento.
// Esempio di utilizzo:

// import useDate from "./useDate";

// function App() {
//   const currentDate = useDate();

//   return (
//     <div>
//       <h1>Data e ora attuali:</h1>
//       <p>{currentDate.toLocaleString()}</p>
//     </div>
//   );
// }

// export default App;
