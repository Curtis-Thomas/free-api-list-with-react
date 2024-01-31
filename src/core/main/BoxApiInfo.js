import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Snackbar,
  IconButton,
  useTheme,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";

// A functional component to display API information and allow copying the base URL to the clipboard.
const BoxApiInfo = ({ baseEndpoint }) => {
  const theme = useTheme();

  // State to control the visibility of the Snackbar (notification) when URL is copied.
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Function to handle the copy button click event.
  const handleCopyClick = () => {
    // Use the Clipboard API to write the baseEndpoint to the clipboard.
    navigator.clipboard
      .writeText(baseEndpoint)
      .then(() => {
        // Log success and trigger Snackbar notification.
        console.log("Copied to clipboard:", baseEndpoint);
        setOpenSnackbar(true);
      })
      .catch((error) => {
        // Log error if copying to clipboard fails.
        console.error("Failed to copy to clipboard:", error);
      });
  };

  // Function to handle Snackbar close events.
  const handleCloseSnackbar = (event, reason) => {
    // Close Snackbar only if the close reason is not a click outside the Snackbar.
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  // JSX element for the close button in the Snackbar.
  const action = (
    <React.Fragment>
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

  // JSX structure for rendering API information, copy button, and Snackbar.
  return (
    <Box
      sx={{
        padding: 2,
        margin: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 4,
        border: "solid 1px",
        borderColor: theme.palette.text.primary,
      }}
    >
      {/* Display "Base URL:" label */}
      <Typography variant="subtitle1">Base URL:</Typography>
      {/* Display the actual base endpoint */}
      <Typography
        variant="body2"
        sx={{ marginRight: 2, color: theme.palette.text.secondary }}
      >
        {baseEndpoint}
      </Typography>
      {/* Button to trigger the copy functionality */}
      <Button
        variant="outlined"
        startIcon={<ContentCopyIcon />}
        onClick={handleCopyClick}
        sx={{
          marginLeft: 2,
          backgroundColor: theme.palette.background.default,
          borderColor: theme.palette.text.primary,
          color: theme.palette.text.secondary,
          "&:hover": {
            borderColor: theme.palette.text.secondary,
            opacity: 0.8,
            border: "1px dashed",
          },
        }}
      >
        Copy
      </Button>
      {/* Snackbar for displaying the notification when URL is copied */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="URL copied to clipboard"
        action={action}
      />
    </Box>
  );
};

export default BoxApiInfo;
