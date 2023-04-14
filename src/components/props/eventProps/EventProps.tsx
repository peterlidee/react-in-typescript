import Buttons from './Buttons'
import Input from './Input'

function EventProps() {
  return (
    <div>
      <h3>Event props</h3>
      <Buttons 
        handleNoParamNoEventClick={() => { console.log('Button clicked') }}
        handleEventClick={(event) => console.log('Button clicked', event)}
        handleEventAndParamClick={(event, value) => console.log('Button clicked', event, 'value is', value)} />
      <Input changeHandler={(event) => console.log('input', event)} />
    </div>
  )
}

export default EventProps