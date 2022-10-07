import React from 'react'
import LoaderHOC from './LoaderHOC';

function FirstButton({heading, state}) {
  return (
    <div>
        <h1>{heading}</h1>
      <button onClick={state}></button>
    </div>
  )
}

export default LoaderHOC(FirstButton);