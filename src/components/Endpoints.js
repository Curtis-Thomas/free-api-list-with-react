import React from "react";
import {
  Box,
  Typography,
  Button,
  Snackbar,
  IconButton,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Endpoints = ({ header, endpoint, description }) => {
  const theme = useTheme();

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleCopyEndpoint = () => {
    navigator.clipboard
      .writeText(endpoint)
      .then(() => {
        console.log("Copied endpoint to clipboard:", endpoint);
        setOpenSnackbar(true);
      })
      .catch((error) => {
        console.error("Failed to copy endpoint to clipboard:", error);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleCloseSnackbar}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box sx={{ border: "solid 1px", padding: 2, marginBottom: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 1,
        }}
      >
        <Typography variant="subtitle1">{header}</Typography>
        <Button
          variant="outlined"
          onClick={handleCopyEndpoint}
          sx={{
            color: theme.palette.text.secondary,
            backgroundColor: theme.palette.background.default,
            padding: "12px 24px",
            borderRadius: "8px",

            border: "1px solid",
            "&:hover": {
              color: theme.palette.text.primary,
              opacity: 0.8,
              border: "1px dashed",
            },
          }}
        >
          Copy Endpoint
        </Button>
      </Box>
      <Box>
        <Typography variant="body2" color="textSecondary">
          Endpoint: {endpoint}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2">{description}</Typography>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Endpoint copied to clipboard"
        action={action}
      />
    </Box>
  );
};

export default Endpoints;
