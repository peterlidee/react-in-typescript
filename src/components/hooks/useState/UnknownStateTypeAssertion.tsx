import { useState } from 'react';

type User = {
  id: number;
  name: string;
}

// we lie to TS, claiming {} is a User and since
// we made a type assertion, TS believes us

function UnknownStateTypeAssertion() {
  const [ user, setUser ] = useState<User>({} as User);
  return(
    <div>
      <strong>Unknown state with type assertion</strong>
      <button onClick={() => setUser({ id: 1, name: 'Peter' })}>login</button>
      <button onClick={() => setUser({} as User)}>logout</button>
      user: {user.name}
    </div>
  )
}

export default UnknownStateTypeAssertion