import User from './User'
import Child from './Child'

function Parent() {
  const user = <User name="Peter" />
  return (
    <div>
      Parent Component
      <Child user={user} />
    </div>
  )
}

export default Parent