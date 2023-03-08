import React, {
  createContext,
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ThemeContext {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
}

const themeContext = createContext<ThemeContext>({
  theme: false,
  setTheme: () => {},
});

export const ThemeProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const value = { theme, setTheme };
  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
};

export const useThemeContext = () => useContext(themeContext);
