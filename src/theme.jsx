import { ThemeProvider } from "styled-components";
import { createContext, useContext, useState } from "react";


const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const Theme = ({ children }) => {
  const [mode, setMode] = useState('light'); // Default theme light

/**
 * Theme configurations
 */
const theme = {
  mode,
  light: {
    primary: "var(--color-primary-light)",
    secondary: "var(--color-secondary-light)",
    title: "var(--color-title-light)",
    subtitles: "var(--color-subtitles-light)",
    icons: "var(--color-icons-light)", 
  },
  dark: {
    primary: "var(--color-primary-dark)",
    secondary: "var(--color-secondary-dark)",
    title: "var(--color-title-dark)",
    subtitles: "var(--color-subtitles-dark)",
    icons: "var(--color-icons-dark)", 
  },
};

const currentTheme = theme[mode];

const toggleTheme = () => {
  setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
};

  return (
    <ThemeContext.Provider value={{mode, toggleTheme}}>
      <ThemeProvider theme={currentTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default Theme;