import React, { useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import StylingTheming from "./stylingTheming/StylingTheming";

const ReferenceGuide = () => {
  const theme = useTheme();

  const [showStyling, setShowStyling] = useState(false);

  const toggleStyling = () => {
    setShowStyling(!showStyling);
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
        onClick={toggleStyling}
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
          {showStyling
            ? "Hide Styling & Theming Guide"
            : "Show Styling & Theming Guide"}
        </Typography>
      </Button>
      {showStyling && <StylingTheming />}
    </Box>
  );
};

export default ReferenceGuide;
