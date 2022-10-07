import React, { useState } from 'react'

function Entername() {

    const[name, setName] = useState('Enter Your Name');


  return (
    <div>
    <h1>{name}</h1>
      <input type="text" onChange={}={(e)=>{setName(e.target.value)}}/>
    </div>
  )
}

export default Entername
