import React, { useEffect, useRef } from 'react'

function DomRef() {
  const inputRef= useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [])
  return (
    <div>
      <strong>DomRef </strong>
      <input ref={inputRef} />
    </div>
  )
}

export default DomRef