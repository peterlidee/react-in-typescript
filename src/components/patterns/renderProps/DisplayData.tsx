import GetData from './GetData'

function DisplayData() {
  return (
    <GetData>
      {({ loading, error, data }) => {
        if(loading) return <>Loading...</>
        if(error) return <>Error {error.message}</>
        if(data?.users && data.users.length === 0) return <div>No users found.</div>
        return <div>
          {data?.users.map(user => <span key={user.id}>{user.name}</span>)}
        </div>
      }}
    </GetData>
  )
}

export default DisplayData