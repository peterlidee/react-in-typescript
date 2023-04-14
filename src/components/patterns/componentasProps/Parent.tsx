import React from 'react';
import { ChildProps } from './Child';

type ParentProps = {
  component: React.ComponentType<ChildProps>;
}

function Parent({ component: Component }: ParentProps) {
  return (
    <div>
      Parent {<Component message="hello" />}
    </div>
  )
}

export default Parent