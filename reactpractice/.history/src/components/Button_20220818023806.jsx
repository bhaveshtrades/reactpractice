import React, { useState } from 'react'

function Button() {

    const [state, setState] = useState(0);

  return (

    <div>
        <h1>{state}</h1>
        <button onClick={()=>setState(state + 1)}>Change State</button>
    </div>
  )
}

export default Button
