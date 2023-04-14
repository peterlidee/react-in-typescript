import { useContext } from 'react'
import { ThemeKnownContext } from './ThemeKnownContext'

function KnownContext() {
  const { theme, toggleTheme } = useContext(ThemeKnownContext);
  return (
    <div style={theme === 'dark' ? { background: '#333', color: '#fff' } : { background: "lightgreen", color: '#000' }}>
      <strong>Known Context</strong>
      <span> Current theme: {theme}</span>
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  )
}

export default KnownContext