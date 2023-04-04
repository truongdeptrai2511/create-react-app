import './App.css';

import {useState} from 'react'


function App() {
const [counter,setCouter]=useState(1)
const handleIncrease=()=>{
  setCouter(counter+1)
}
  return (
    <div className="App" style={{padding: 20}}>
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
