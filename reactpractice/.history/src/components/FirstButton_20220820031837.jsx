import React from 'react'
import LoaderHOC from './LoaderHOC';

function FirstButton({heading, count}) {
  return (
    <div>
       <h1>{heading}</h1>
      <button onClick={count}></button>
    </div>
  )
}

export default LoaderHOC(FirstButton);