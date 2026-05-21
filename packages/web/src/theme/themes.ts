import { createTheme, type Theme, type ThemeOptions } from "@mui/material/styles";

interface ThemeBuild {
  bg: string;
  primary: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
}

function build({ bg, primary, textPrimary, textSecondary, accent }: ThemeBuild): ThemeOptions {
  return {
    palette: {
      mode: "dark",
      primary: { main: primary },
      secondary: { light: accent, main: "#00bcd4", contrastText: "#ffffff" },
      background: { default: bg, paper: bg },
      text: { primary: textPrimary, secondary: textSecondary },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 0,
            padding: "8px 16px",
          },
        },
      },
    },
  };
}

export const THEME_IDS = [
  "light",
  "dark",
  "dracula",
  "cobalt",
  "gruvbox",
  "highcontrast",
  "mero",
  "onedark",
  "radical",
  "synthwave",
  "tokyonight",
] as const;
export type ThemeId = (typeof THEME_IDS)[number];

export const THEME_LABELS: Record<ThemeId, string> = {
  light: "Light",
  dark: "Dark",
  dracula: "Dracula",
  cobalt: "Cobalt",
  gruvbox: "Gruvbox",
  highcontrast: "High Contrast",
  mero: "Mero",
  onedark: "One Dark",
  radical: "Radical",
  synthwave: "Synthwave",
  tokyonight: "Tokyo Night",
};

const THEME_OPTIONS: Record<ThemeId, ThemeOptions> = {
  light: {
    palette: {
      mode: "light",
      primary: { main: "#5194F0" },
      secondary: { light: "#33c9dc", main: "#00bcd4", contrastText: "#ffffff" },
      background: { default: "#FFFEFE", paper: "#FFFEFE" },
      text: { primary: "#5194F0", secondary: "#000000" },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { textTransform: "none", borderRadius: 0, padding: "8px 16px" },
        },
      },
    },
  },
  dark: build({
    bg: "#121212",
    primary: "#151515",
    textPrimary: "#9e9e9e",
    textSecondary: "#878787",
    accent: "#000000",
  }),
  dracula: build({
    bg: "#282A36",
    primary: "#0077ba",
    textPrimary: "#DD6387",
    textSecondary: "#ffffff",
    accent: "#6FC4E2",
  }),
  cobalt: build({
    bg: "#193549",
    primary: "#0077ba",
    textPrimary: "#C577C2",
    textSecondary: "#64CA9E",
    accent: "#096DC5",
  }),
  gruvbox: build({
    bg: "#282828",
    primary: "#0077ba",
    textPrimary: "#D8A52E",
    textSecondary: "#88B777",
    accent: "#FE8019",
  }),
  highcontrast: build({
    bg: "#000000",
    primary: "#0077ba",
    textPrimary: "#C2CC13",
    textSecondary: "#ffffff",
    accent: "#00DFDF",
  }),
  mero: build({
    bg: "#0A0F0B",
    primary: "#0077ba",
    textPrimary: "#91B302",
    textSecondary: "#62A97E",
    accent: "#8CA24E",
  }),
  onedark: build({
    bg: "#282C34",
    primary: "#0077ba",
    textPrimary: "#C6A86F",
    textSecondary: "#DF6D74",
    accent: "#8EB573",
  }),
  radical: build({
    bg: "#0D1117",
    primary: "#0077ba",
    textPrimary: "#D83B7D",
    textSecondary: "#99E5E0",
    accent: "#DCBF42",
  }),
  synthwave: build({
    bg: "#2B213A",
    primary: "#0077ba",
    textPrimary: "#C5C9D0",
    textSecondary: "#E5289E",
    accent: "#EF8539",
  }),
  tokyonight: build({
    bg: "#1A1B27",
    primary: "#0077ba",
    textPrimary: "#638FDA",
    textSecondary: "#38BDAE",
    accent: "#BF91F3",
  }),
};

export function getTheme(id: ThemeId): Theme {
  return createTheme(THEME_OPTIONS[id]);
}

export const DEFAULT_THEME: ThemeId = "onedark";

export function isThemeId(value: unknown): value is ThemeId {
  return typeof value === "string" && (THEME_IDS as readonly string[]).includes(value);
}
