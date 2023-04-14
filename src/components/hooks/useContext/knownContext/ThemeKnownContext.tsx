import { createContext, useState } from "react";

export const ThemeKnownContext  = createContext({ theme: 'dark', toggleTheme: () => {} })

type ThemeKnownContextProviderProps = {
  children: React.ReactNode
}

export const ThemeKnownContextProvider = ({ children }: ThemeKnownContextProviderProps) => {
  const [ theme, setTheme ] = useState('dark');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  return <ThemeKnownContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeKnownContext.Provider>
}