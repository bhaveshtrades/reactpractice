import React from 'react'

function Child({name}) {

  return (
    <div>
      <h1>This is the child component</h1>
      <button onClick={()=>name}></button>
    </div>
  )
}

export default Child

