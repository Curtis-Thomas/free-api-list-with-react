import React from "react";
import { Box, Typography } from "@mui/material";

const ApiListingsIntroduction = () => {
  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        API Listings Introduction
      </Typography>
      <Typography paragraph>
        Welcome to the API Listings section of the Free API List with React
        project! Here, you'll discover a diverse range of free APIs, curated to
        enhance your development experience. Whether you're a beginner or an
        experienced developer, these listings provide valuable resources for
        various applications and needs.
      </Typography>
      <Typography paragraph>
        Explore APIs across different categories, learn about their
        functionalities, and see how they can be integrated into your projects.
        This section is designed to be your starting point in navigating and
        utilizing the rich collection of APIs we have compiled.
      </Typography>
    </Box>
  );
};

export default ApiListingsIntroduction;
