import {useDispatch, useSelector} from 'react-redux'
import './App.css';

function App() {
  const counter = useSelector((state)=> state.counter)
  const dispach= useDispatch()
  const increament=()=>{
    dispach({type: 'INC'})
  }
  const decreament =()=>{
    dispach({type: 'DEC'})
  }
  const addby=()=>{
    dispach({type: 'ADD'})
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increament}>+</button>
      <button onClick={decreament}>-</button>
      <button onClick={addby}>Add</button>
    </div>
  );
}

export default App;
