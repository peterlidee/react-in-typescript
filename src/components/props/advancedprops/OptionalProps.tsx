import React from 'react'

type Props = {
  optional?: boolean
}

function OptionalProps({ optional = false }) {
  return (
    <div>
      <strong>Optional Props: </strong> { optional ? 'greet prop passed' : 'greet props missing' }
    </div>
  )
}

export default OptionalProps