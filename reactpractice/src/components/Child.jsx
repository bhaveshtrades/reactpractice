import React from 'react'

function Child({name}) {

  return (
    <div>
      <h1>This is the child component</h1>
      <button onClick={()=>name}>Print My Name</button>
    </div>
  )
}

export default Child

