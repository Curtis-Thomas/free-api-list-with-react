import React, { useState } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import GettingStartedContent from "./GettingStartedContent";

const GettingStarted = () => {
  const theme = useTheme();
  const [showGettingStarted, setShowGettingStarted] = useState(false);

  const toggleGettingStarted = () => {
    setShowGettingStarted(!showGettingStarted);
  };

  return (
    <Box
      sx={{
        border: "solid 1px",
        padding: 2,
        marginBottom: 3,
        color: theme.palette.text.primary,
      }}
    >
      <Button
        onClick={toggleGettingStarted}
        variant="contained"
        color="primary"
        sx={{
          marginBottom: 2,
          backgroundColor: theme.palette.background.default,
          border: "1px solid",
          color: theme.palette.text.primary,
          "&:hover": {
            borderColor: theme.palette.text.secondary,
            opacity: 0.8,
            border: "1px dashed",
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        <Typography variant="button">
          {showGettingStarted ? "Hide Getting Started" : "Show Getting Started"}
        </Typography>
      </Button>
      {showGettingStarted && <GettingStartedContent />}
    </Box>
  );
};

export default GettingStarted;
