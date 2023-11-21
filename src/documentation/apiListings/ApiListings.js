import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ApiListingsIntroduction from "./ApiListingsIntroduction";

const ApiListings = () => {
  const [showApiListings, setShowApiListings] = useState(false);

  const toggleApiListings = () => {
    setShowApiListings(!showApiListings);
  };

  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2, marginBottom: 3 }}>
      <Button
        onClick={toggleApiListings}
        variant="contained"
        color="primary"
        sx={{ marginBottom: 2 }}
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
