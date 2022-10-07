import react from 'react';
import { useState } from 'react';

const LoaderHOC = (WrappedComponent)=>{
    function Button(){
        const[state, setState] = useState(0);
        return(
            <>
              <WrappedComponent count={()=>{setState+1}} state={state}></WrappedComponent>
            </>
        )
    }
}

export default LoaderHOC;