import { useContext } from "react";
import { ThemeUnknownContext } from './ThemeUnknownContext';

export default function UnknownContext(){
  const { theme, toggleTheme } = useContext(ThemeUnknownContext);
  return(
    <div style={theme === 'dark' ? { background: '#333', color: '#fff' } : { background: "lightgreen", color: '#000' }}>
      <strong>Unknown context</strong>
      <span>theme: {theme} </span>
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  )
}