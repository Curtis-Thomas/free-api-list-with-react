import React, { useState } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import ContributorsContent from "./ContributorsContent";

const Contributors = () => {
  const theme = useTheme();

  const [showContributors, setShowContributors] = useState(false);

  const toggleContributors = () => {
    setShowContributors(!showContributors);
  };

  return (
    <Box
      sx={{
        border: "solid 1px ",
        padding: 2,
        marginBottom: 3,
        color: theme.palette.text.primary,
      }}
    >
      <Button
        onClick={toggleContributors}
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
        <Typography variant="button" sx={{ color: theme.palette.text.primary }}>
          {showContributors ? "Hide Contributors" : "Show Contributors"}
        </Typography>
      </Button>
      {showContributors && <ContributorsContent />}
    </Box>
  );
};

export default Contributors;
