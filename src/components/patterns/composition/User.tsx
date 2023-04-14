type UserProps = {
  name: string;
}

function User({ name }: UserProps) {
  return (
    <div>User Component: { name }</div>
  )
}

export default User