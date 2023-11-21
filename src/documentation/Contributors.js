import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ContributorsContent from "./ContributorsContent";

const Contributors = () => {
  const [showContributors, setShowContributors] = useState(false);

  const toggleContributors = () => {
    setShowContributors(!showContributors);
  };

  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2, marginBottom: 3 }}>
      <Button
        onClick={toggleContributors}
        variant="contained"
        color="primary"
        sx={{ marginBottom: 2 }}
      >
        <Typography variant="button">
          {showContributors ? "Hide Contributors" : "Show Contributors"}
        </Typography>
      </Button>
      {showContributors && <ContributorsContent />}
    </Box>
  );
};

export default Contributors;
