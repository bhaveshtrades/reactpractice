import react from 'react';
import { useState } from 'react';

const LoaderHOC = (WrappedComponent)=>{
    function Button({state, increment}){
        const[state, setState] = useState(0);
        function increment(){
            setState(state+1);
        }
        return(
            <>
              <WrappedComponent count={state} increment={increment}></WrappedComponent>
            </>
        )
    }
    return Button;
}

export default LoaderHOC;