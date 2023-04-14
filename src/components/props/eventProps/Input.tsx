import React from 'react'

type InputProps = {
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ changeHandler }: InputProps) {
  return (
    <div>
      <strong>input event</strong>
      <input onChange={changeHandler} />
    </div>
  )
}

export default Input