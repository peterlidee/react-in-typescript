import React from 'react'
import DisplayUser from './DisplayUser'

function ExtractProps({ user }: React.ComponentProps<typeof DisplayUser>){
  return (
    <div>
      <h3>Extract Props with React.ComponentProps</h3>
      <em>Extract type directly from component, without using the type itself.</em>
      <div>id: {user.id} name: {user.name.firstName} {user.name.lastName}</div>
    </div>
  )
}

export default ExtractProps