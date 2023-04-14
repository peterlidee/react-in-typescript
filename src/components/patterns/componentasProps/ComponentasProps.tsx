import React from 'react'
import Parent from './Parent'
import Child from './Child'

function ComponentProps() {
  return (
    <div>
      <h3>Component as props</h3>
      <p>(pass a functional component as prop, not calling it)</p>
      <Parent component={Child} />
    </div>
  )
}

export default ComponentProps