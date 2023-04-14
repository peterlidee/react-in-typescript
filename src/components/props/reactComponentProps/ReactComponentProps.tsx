import CustomButton1 from "./CustomButton1"
import CustomButton2 from "./CustomButton2"
import CustomInput from "./CustomInput"


function ComponentProps() {
  return (
    <div>
      <h3>React.ComponentProps</h3>
      <CustomInput value="hello" readOnly />
      <CustomButton1 variant="primary" onClick={() => console.log('CustomButton 1 clicked')} />
      <CustomButton2 onClick={() => console.log('CustomButton 2 clicked')}>
        custom button 2
      </CustomButton2>
    </div>
  )
}

export default ComponentProps