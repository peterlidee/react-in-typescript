import { PersonType } from './people';

type GenericComponentAdvancedProps<T> = {
  list: T[];
  handler: (item: T) => void;
}

function GenericComponentAdvanced<T extends PersonType>({ list, handler }: GenericComponentAdvancedProps<T>) {
  return (
    <div>
      <strong>Generic Component with objects</strong>
      {list.map(listItem => 
        <span key={listItem.id} onClick={() => handler(listItem)} style={{ margin: '0 3px' }}>{listItem.name}</span>)}
    </div>
  )
}

export default GenericComponentAdvanced