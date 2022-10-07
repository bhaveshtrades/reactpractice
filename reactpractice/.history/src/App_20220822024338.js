import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import FirstButton from './components/FirstButton';
import {increment, decrement, incrementByAmount} from './ReduxToolkit/Reducer';
import { useState } from 'react';

function App() {

  const[incrementAmount, setIncrementAmount] = useState(2);

  const count = useSelector((state) => state.reducer.value)
  const dispatch = useDispatch();


  return (
    <>
      <FirstButton/>

      <h1>{count}</h1>
      <input type='number' onChange={(e)=>{setIncrementAmount(e.target.value)}}/>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increment())}>+</button>
      <br/>
      <button onClick={()=>dispatch(incrementByAmount((incrementAmount)))}>Submit Increment</button>
    </>
  );
}

export default App;
