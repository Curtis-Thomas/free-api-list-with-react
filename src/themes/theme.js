import { createTheme } from "@mui/material/styles";

// Create a custom theme using the createTheme function from MUI (Material-UI)
const theme = createTheme({
  palette: {
    // Primary color palette
    primary: {
      main: "#0077ba", // Main primary color
    },
    // Secondary color palette
    secondary: {
      light: "#33c9dc", // Light shade of secondary color
      main: "#00bcd4", // Main secondary color
      contrastText: "#ffffff", // Contrast text color to be used with the secondary color
    },
    // Background color palette
    background: {
      default: "#FCFCFC", // Default background color
    },
    text: {
      primary: "#0077ba",
      secondary: "#0077ba",
    },
  },
  typography: {
    body1: {
      color: "#373d3f",
    },
    h1: {
      color: "#373d3f",
    },
    h2: {
      color: "#373d3f",
    },
    h3: {
      color: "#373d3f",
    },
    h4: {
      color: "#373d3f",
    },
    h5: {
      color: "#373d3f",
    },
    h6: {
      color: "#373d3f",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 0,
          padding: "8px 16px",
          color: "#0077ba", // Custom color for the button text
          backgroundColor: "#ffffff", // Custom background color for the button
          border: "1px solid #0077ba", // Custom border for the button
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#bbb", // Custom background color for the AppBar
        },
      },
    },
  },
});

export default theme; // Export the custom theme
