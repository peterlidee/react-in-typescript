import { ClientType, PersonType, clients, staff, visitors } from './people'
import GenericComponent from './GenericComponent'
import GenericComponentAdvanced from './GenericComponentAdvanced'
import genericFunction from './GenericFunction'

function GenericProps() {

  return (
    <div>
      <h3>Generics</h3>

      <GenericComponent list={[1,2,3]} handler={genericFunction<number>} />
      <GenericComponent list={['a','b','c']} handler={genericFunction<string>} />
      {/* we don't set type on handler because it defaults to PersonType */}
      <GenericComponentAdvanced list={visitors} handler={genericFunction<PersonType>} />
      <GenericComponentAdvanced list={clients} handler={genericFunction<ClientType>} />
      <GenericComponentAdvanced list={staff} handler={genericFunction<PersonType>} />
      {/* we don't set type on handler because it defaults to PersonType */}
      <GenericComponentAdvanced list={[ 
        { id: 10, name: 'Al', role: 'sales', address: 'Chicago' },
        { id: 11, name: 'Cathy' }
      ]} handler={genericFunction} />
    </div>
  )
}

export default GenericProps