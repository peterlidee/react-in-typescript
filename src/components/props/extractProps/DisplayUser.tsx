type Name = {
  firstName: string;
  lastName: string;
}

type User = {
  id: number;
  name: Name;
}

type DisplayUserProps = {
  user: User
}

export default function DisplayUser({ user }: DisplayUserProps){
  return <div>{user.id} {user.name.firstName} {user.name.lastName}</div>
}