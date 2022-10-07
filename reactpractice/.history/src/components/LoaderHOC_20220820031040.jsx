import react from 'react';
import { useState } from 'react';

const LoaderHOC = (WrappedComponent)=>{
    function Button({count, heading}){
        const[state, setState] = useState(0);
        return(
            <>
              <WrappedComponent heading={state} count={()=>state+1}></WrappedComponent>
            </>
        )
    }
    return Button;
}

export default LoaderHOC;