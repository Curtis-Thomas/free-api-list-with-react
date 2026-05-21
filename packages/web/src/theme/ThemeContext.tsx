import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { type ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_THEME, type ThemeId, getTheme, isThemeId } from "./themes.js";

const STORAGE_KEY = "theme";

interface ThemeContextValue {
  themeId: ThemeId;
  setThemeId: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredTheme(): ThemeId {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isThemeId(stored) ? stored : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>(readStoredTheme);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, themeId);
    } catch {
      // ignore (private mode, quota, etc.)
    }
  }, [themeId]);

  const theme = useMemo(() => getTheme(themeId), [themeId]);
  const value = useMemo(() => ({ themeId, setThemeId }), [themeId]);

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeId(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemeId must be used inside a ThemeProvider");
  }
  return ctx;
}
