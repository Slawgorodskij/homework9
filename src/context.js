import {createContext} from "react";

export const themes = {
  light: {
      background: '#d8d8e0',
      text: '#505057',
  },
    dark: {
        background: '#505057',
        text: '#d8d8e0',
    }
}

export const ThemeContext = createContext({themes:themes.light, toggleTheme: ()=>{}});