import react from 'react';
import { useState } from 'react';

const LoaderHOC = (WrappedComponent)=>{
    function Button(){
        const[state, setState] = useState(0);
        function increment(){
            setState(state+1);
        }
        return(
            <>
              <WrappedComponent count={count} increment={increment}></WrappedComponent>
            </>
        )
    }
}

export default LoaderHOC;