import React from 'react'

type StylePropsProps = {
  styles: React.CSSProperties
}

function StyleProps({ styles }: StylePropsProps) {
  return (
    <div style={styles}>
      <h3>StyleProps</h3>
    </div>
  )
}

export default StyleProps