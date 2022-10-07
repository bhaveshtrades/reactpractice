import React from 'react'
import LoaderHOC from './LoaderHOC';

function FirstButton({heading, count, name}) {
  return (
    <div>
       <h1>{name}:{heading}</h1>
      <button onClick={count}>{name}</button>
    </div>
  )
}

export default LoaderHOC(FirstButton);