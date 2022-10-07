import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import FirstButton from './components/FirstButton';
import {increment, decrement, incrementByAmount} from './ReduxToolkit/Reducer';
import { useState } from 'react';
import Newcomponent from './components/Newcomponent';

function App() {

  const[incrementAmount, setIncrementAmount] = useState(2);

  const count = useSelector((state) => state.reducer.bhavesh)
  const dispatch = useDispatch();


  return (
    <>
      <FirstButton/>

      <h1>{count}</h1>
      <h1><Newcomponent heading='Bhavesh'/></h1>
      <input type='number' onChange={(e)=>{setIncrementAmount(e.target.value)}}/>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increment())}>+</button>
      <br/>
      <button onClick={()=>dispatch(incrementByAmount((Number(incrementAmount))))}>Submit Increment</button>
    </>
  );
}

export default App;
