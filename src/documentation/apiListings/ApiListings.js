import React, { useState } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import ApiListingsIntroduction from "./ApiListingsIntroduction";

const ApiListings = () => {
  const theme = useTheme();

  const [showApiListings, setShowApiListings] = useState(false);

  const toggleApiListings = () => {
    setShowApiListings(!showApiListings);
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
        onClick={toggleApiListings}
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
          {showApiListings ? "Hide API Listings" : "Show API Listings"}
        </Typography>
      </Button>
      {showApiListings && <ApiListingsIntroduction />}
    </Box>
  );
};

export default ApiListings;
