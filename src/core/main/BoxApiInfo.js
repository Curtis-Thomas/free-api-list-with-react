import React, { useState } from "react";
import { Typography, Box, Button, Snackbar, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";

// A functional component to display API information and allow copying the base URL to the clipboard.
const BoxApiInfo = ({ baseEndpoint }) => {
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
        marginBottom: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #bbb",
      }}
    >
      {/* Display "Base URL:" label */}
      <Typography variant="subtitle1">Base URL:</Typography>
      {/* Display the actual base endpoint */}
      <Typography variant="body2" sx={{ marginRight: 2 }}>
        {baseEndpoint}
      </Typography>
      {/* Button to trigger the copy functionality */}
      <Button
        variant="outlined"
        startIcon={<ContentCopyIcon />}
        onClick={handleCopyClick}
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
