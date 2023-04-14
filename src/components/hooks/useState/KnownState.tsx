import React, { useState } from 'react'

function KnownState() {
  const [ value, setValue ] = useState(false);
  return (
    <div>
      <strong>Known state</strong>
      <button onClick={() => setValue(currValue => !currValue)}>toggle state</button>
      state: {String(value)}
    </div>
  )
}

export default KnownState