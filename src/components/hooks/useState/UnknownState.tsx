import { useState } from 'react';

type User = {
  id: number;
  name: string;
}

function UnknownState() {
  const [ user, setUser ] = useState<User | null>(null)
  return (
    <div>
      <strong>Unknown state</strong>
      <button onClick={() => setUser({ id: 1, name: 'Peter' })}>login</button>
      <button onClick={() => setUser(null)}>logout</button>
      user: {user?.name}
    </div>
  )
}

export default UnknownState