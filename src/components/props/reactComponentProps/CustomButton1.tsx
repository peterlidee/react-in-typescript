type CustomButton1Props = {
  variant: 'primary' | 'secondary';
} & React.ComponentProps<'button'>;

function CustomButton1({ variant, children, ...rest }: CustomButton1Props) {
  return (
    <div>
      <strong>extend native props with your own</strong>
      <button className={`btn--${variant}`} {...rest}>custom button</button>
    </div>
  )
}

export default CustomButton1