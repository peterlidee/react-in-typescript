import { createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};
type ThemeType = 'dark' | 'light';
type ThemeUnknownContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

// export const ThemeUnknownContext = createContext<ThemeUnknownContextType>({} as ThemeUnknownContextType);
export const ThemeUnknownContext =
  createContext<null | ThemeUnknownContextType>(null);
// also add conditionals when use useContext

export const ThemeUnknownContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeType>('dark');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <ThemeUnknownContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeUnknownContext.Provider>
  );
};
