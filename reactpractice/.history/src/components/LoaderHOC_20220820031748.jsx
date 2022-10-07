import react from 'react';
import { useState } from 'react';

const LoaderHOC = (WrappedComponent)=>{
    function Button(){
        const[state, setState] = useState(0);
        return(
            <>
              <WrappedComponent count={()=>{setState(state+1)}} heading={state}></WrappedComponent>
            </>
        )
    }
    return Button;
}

export default LoaderHOC;