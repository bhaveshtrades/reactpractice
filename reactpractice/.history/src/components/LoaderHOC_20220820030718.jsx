import react from 'react';
import { useState } from 'react';

const LoaderHOC = (WrappedComponent)=>{
    function Button({}){
        const[state, setState] = useState(0);
        return(
            <>
              <WrappedComponent></WrappedComponent>
            </>
        )
    }
    return Button;
}

export default LoaderHOC;