import { createTheme } from "@mui/material/styles";

const themeDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#b0b3b8",
    },
    secondary: {
      light: "#b0b3b8",
      main: "#b0b3b8",
      contrastText: "#b0b3b8",
    },
    background: {
      default: "#121212",
    },
    text: {
      primary: "#b0b3b8",
      secondary: "#b0b3b8",
    },
  },
  typography: {
    body1: {
      color: "#dadedf",
    },
    h1: {
      color: "#c1c7c9",
    },
    h2: {
      color: "#a7b0b2",
    },
    h3: {
      color: "#a7b0b2",
    },
    h4: {
      color: "#a7b0b2",
    },
    h5: {
      color: "#a7b0b2",
    },
    h6: {
      color: "#a7b0b2",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 0,
          padding: "8px 16px",
          color: "#a7b0b2", // Custom color for the button text
          backgroundColor: "#242526", // Custom background color for the button
          border: "1px solid #3a3b3c", // Custom border for the button
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: "#bbb", // Custom background color for the AppBar
        color: "#b0b3b8", // Custom color for the AppBar text
      },
    },
  },
});

export default themeDark;
