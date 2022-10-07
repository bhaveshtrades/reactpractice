import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import FirstButton from './components/FirstButton';
import {increment, decrement} from './ReduxToolkit/Reducer';

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();


  return (
    <>
      <FirstButton/>

      <h1>{count}</h1>
      <input type='number'/>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increment())}>+</button>
    </>
  );
}

export default App;
