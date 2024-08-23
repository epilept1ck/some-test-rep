import { useState } from "react";

function App(){
// const [increment, setIncrement] = useState([])
const [state, setState] = useState(0)
    return (
        <>

       <button onClick={() => setState(state + 1)}>+</button>
       <div>{state}</div>
       <button onClick={() => setState(state - 1)}>-</button>
         </>
    )
}

export default App;


// use state