import React, { useState } from 'react'

function Entername() {

    const[name, setName] = useState('Enter Your Name');


  return (
    <div>
    <label htmlFor="name">Name: </label>
    <h1>${name}</h1>
      <input type="text" onClick={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default Entername
