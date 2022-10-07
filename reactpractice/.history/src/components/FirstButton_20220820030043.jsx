import React from 'react'
import LoaderHOC from './LoaderHOC';

function FirstButton(props) {
  return (
    <div>
        <h1>{state}</h1>
      <button onClick={count}></button>
    </div>
  )
}

export default LoaderHOC(FirstButton);