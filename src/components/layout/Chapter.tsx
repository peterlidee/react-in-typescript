import React from 'react'

type ChapterProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

function Chapter({ children, style = { marginBottom: '2em', backgroundColor: '#ddd', padding: '1em 0' }}: ChapterProps) {
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Chapter