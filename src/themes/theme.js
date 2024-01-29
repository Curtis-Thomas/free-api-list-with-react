import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5194F0",
    },
    secondary: {
      light: "#33c9dc",
      main: "#00bcd4",
      contrastText: "#ffffff",
    },
    background: {
      default: "#FFFEFE",
    },
    text: {
      primary: "#5194F0",
      secondary: "#000000",
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
    MuiBox: {
      styleOverrides: {
        root: {
          backgroundColor: "black",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          borderRadius: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#333",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#0077ba",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#0077ba",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          color: "#0077ba",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#0077ba",
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#0077ba",
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#333",
          color: "#fff",
        },
      },
    },
  },
});

export default theme;
