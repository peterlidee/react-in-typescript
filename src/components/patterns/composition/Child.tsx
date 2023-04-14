type ChildProps = {
  user: React.ReactNode;
}

function Child({ user }: ChildProps) {
  return (
    <div>
      Child Component
      {user}
    </div>
  )
}

export default Child