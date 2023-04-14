import { TextWrapper } from './TextWrapper'
import Child from './Child'
import Parent from './Parent'

function ChildrenProps() {
  return (
    <div>
      <h3>Children Props</h3>
      <TextWrapper>text child</TextWrapper>
      <Parent>
        <Child />
      </Parent>
    </div>
  )
}

export default ChildrenProps