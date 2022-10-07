import React from 'react'

function Child({setConsole}){
  return (
    <div>
      <button setConsole>Print my name</button>
    </div>
  )
}

export default Child;
