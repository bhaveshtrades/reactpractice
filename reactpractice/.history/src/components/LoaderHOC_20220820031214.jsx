import react from 'react';
import { useState } from 'react';

const LoaderHOC = (WrappedComponent)=>{
    function Button({state}){
        const[state, setState] = useState(0);
        return(
            <>
              <WrappedComponent heading={state} count={()=>{setState(state+1)}}></WrappedComponent>
            </>
        )
    }
    return Button;
}

export default LoaderHOC;