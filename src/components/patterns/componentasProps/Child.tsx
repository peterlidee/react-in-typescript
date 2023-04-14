export type ChildProps = {
  message: string;
}

function Child({ message }: ChildProps) {
  return (
    <div>Child says {message}</div>
  )
}

export default Child