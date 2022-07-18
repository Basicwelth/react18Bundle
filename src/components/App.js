import { useState } from "react";
import FormMain from "./FormMain";

function App() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    function handleClick() {
        setCount(c => c + 1); // Не вызывает ререндер
        setFlag(f => !f); // Не вызывает ререндер
    }
    return (
        <div className="column">
            <button onClick={handleClick} type="button">Next</button>
            <h1 className={ flag ? "blue" : "black" }>{count}</h1>
            <FormMain/>
        </div>
    );
}
export default App