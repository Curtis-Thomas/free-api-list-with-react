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
      color: "#e4e6eb",
    },
    h1: {
      color: "#e4e6eb",
    },
    h2: {
      color: "#e4e6eb",
    },
    h3: {
      color: "#e4e6eb",
    },
    h4: {
      color: "#e4e6eb",
    },
    h5: {
      color: "#e4e6eb",
    },
    h6: {
      color: "#e4e6eb",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 0,
          padding: "8px 16px",
          color: "#e4e6eb", // Custom color for the button text
          backgroundColor: "#242526", // Custom background color for the button
          border: "1px solid #e4e6eb", // Custom border for the button
        },
      },
    },
  },
});

export default themeDark;
