import { createTheme } from "@mui/material/styles";

// Create a custom theme using the createTheme function from MUI (Material-UI)
const theme = createTheme({
  palette: {
    primary: {
      main: "#0077ba",
    },
    secondary: {
      light: "#00DFDF",
      main: "#00bcd4",
      contrastText: "#ffffff",
    },
    background: {
      default: "#000000",
    },
    text: {
      primary: "#C2CC13",
      secondary: "#ffffff",
    },
  },
  typography: {
    common: {
      color: "#373d3f",
    },
    body1: {},
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 0,
          padding: "8px 16px",
          color: "#0077ba",
          backgroundColor: "#ffffff",
          borderColor: "#0077ba",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#bbb",
        },
      },
    },
  },
});

export default theme; // Export the custom theme
