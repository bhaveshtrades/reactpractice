import React from 'react'
import LoaderHOC from './LoaderHOC';

function FirstButton() {
  return (
    <div>
        <h1>{state}</h1>
      <button onClick={increment}></button>
    </div>
  )
}

export default LoaderHOC(FirstButton);