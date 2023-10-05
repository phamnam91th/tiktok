import './App.css';
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(2)

  const handleIncrease = () => {
    setCounter(Math.random);
  }

  return (
    <div className="App">
        <h1>{counter}</h1>
        <button onClick={handleIncrease} >Click </button>
    </div>
  );
}

export default App;
