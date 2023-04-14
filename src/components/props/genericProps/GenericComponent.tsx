type GenericComponentProps<T> = {
  list: T[]
  handler: (item: T) => void
}

function GenericComponent<T extends number | string>({ list, handler }: GenericComponentProps<T>) {
  return (
    <div>
      <strong>Generic Component with primitives</strong>
      {list.map((listItem, index) => 
        <span key={index} onClick={() => handler(listItem)} style={{ margin: '0 3px' }}>{listItem}</span>)}
    </div>
  )
}

export default GenericComponent