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
    // Error color palette
    error: {
      main: "#f44336", // Main error color
    },
    // Success color palette
    success: {
      main: "#4caf50", // Main success color
    },
    // Warning color palette
    warning: {
      main: "#ff9800", // Main warning color
    },
    // Info color palette
    info: {
      main: "#2196f3", // Main info color
    },
    // Background color palette
    background: {
      default: "#ffffff", // Default background color
    },
    // Text color palette
    text: {
      primary: "#000000", // Primary text color
    },
    // Disabled color palette
    disabled: {
      main: "#808080", // Main disabled color
    },
    // Hover color palette
    hover: {
      main: "#e0e0e0", // Main hover color
    },
    // Active color palette
    active: {
      main: "#1976d2", // Main active color
    },
    // Focus color palette
    focus: {
      main: "#1976d2", // Main focus color
    },
    // Link color palette
    link: {
      main: "#1976d2", // Main link color
    },
    // Placeholder color palette
    placeholder: {
      main: "#bdbdbd", // Main placeholder color
    },
    // Icon color palette
    icon: {
      main: "#757575", // Main icon color
    },
    // Border color palette
    border: {
      main: "#e0e0e0", // Main border color
    },
    // Divider color palette
    divider: {
      main: "#e0e0e0", // Main divider color
    },
    // Success background color palette
    successBackground: {
      main: "#e8f5e9", // Main success background color
    },
    // Error background color palette
    errorBackground: {
      main: "#ffebee", // Main error background color
    },
    // Warning background color palette
    warningBackground: {
      main: "#fff3e0", // Main warning background color
    },
    // Info background color palette
    infoBackground: {
      main: "#e3f2fd", // Main info background color
    },
    // Accent color palette
    accent: {
      main: "#ff4081", // Main accent color
    },
  },
});

export default theme; // Export the custom theme
