import React, { useState } from 'react'
import hocButton from './Hoc';

function Button([name]) {

    const [state, setState] = useState(0);

  return (

    <div>
        <h1>{name}:{state}</h1>
        <button onClick={()=>setState(state + 1)}>Change State</button>
    </div>
  )
}

export default hocButton(Button);
