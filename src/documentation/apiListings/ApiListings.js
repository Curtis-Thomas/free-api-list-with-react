import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ApiListingsIntroduction from "./ApiListingsIntroduction";

const ApiListings = () => {
  const [showApiListings, setShowApiListings] = useState(false);

  const toggleApiListings = () => {
    setShowApiListings(!showApiListings);
  };

  return (
    <Box sx={{ border: "solid 1px #333333" }}>
      <Button onClick={toggleApiListings}>
        <Typography>Api Listings</Typography>
      </Button>
      {showApiListings && <ApiListingsIntroduction />}
    </Box>
  );
};

export default ApiListings;
