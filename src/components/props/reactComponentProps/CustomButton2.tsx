import React from 'react'

type CustomButton2Props = {
  children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>

function CustomButton2({ children, ...rest }: CustomButton2Props) {
  return (
    <div>
      <strong>Omit (type utility)</strong>
      <em>(restrict children to string only)</em>
      <button {...rest}>{children}</button>
    </div>
  )
}

export default CustomButton2