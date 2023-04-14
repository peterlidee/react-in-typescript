type InputProps = React.ComponentProps<'input'>

function CustomInput( props : InputProps) {
  return (
    <div>
      <strong>copy all props, no custom ones</strong>
      <input {...props} />
    </div>
  )
}

export default CustomInput