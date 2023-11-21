import React from "react";
import { Box, Typography } from "@mui/material";

const Overview = () => {
  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2, marginBottom: 3 }}>
      <Typography variant="h5" gutterBottom>
        Free API List with React Project Documentation
      </Typography>

      <Typography variant="h6" gutterBottom>
        Welcome
      </Typography>
      <Typography paragraph>
        Welcome to the Free API List with React project! This open-source
        initiative provides a comprehensive collection of free APIs, complete
        with tools for testing and exploration. Crafted using React JS and
        Material UI, this project serves as a resource for discovering and
        learning about various APIs suited for myriad purposes.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Features
      </Typography>
      <Typography paragraph>
        <strong>API Listings</strong>
        <ul>
          <li>
            Curated Collection: A wide range of free APIs across various
            categories.
          </li>
          <li>
            Ease of Access: User-friendly interface for browsing and discovering
            APIs.
          </li>
        </ul>
      </Typography>

      <Typography paragraph>
        <strong>Documentation</strong>
        <ul>
          <li>
            Detailed Information: In-depth documentation for each API, including
            endpoints, request parameters, and response formats.
          </li>
          <li>
            User-Oriented Design: Documentation designed to cater to both
            beginners and experienced users.
          </li>
        </ul>
      </Typography>

      <Typography paragraph>
        <strong>API Testing</strong>
        <ul>
          <li>
            Built-in Tools: Tools integrated within the project for real-time
            testing and experimentation with APIs.
          </li>
          <li>
            Interactive Experience: Hands-on approach for understanding API
            functionalities.
          </li>
        </ul>
      </Typography>

      <Typography paragraph>
        <strong>Contribution</strong>
        <ul>
          <li>
            Community-Driven: Open for contributions in adding new APIs,
            enhancing documentation, and improving testing tools.
          </li>
          <li>
            Collaborative Environment: A platform for developers to contribute
            to a shared goal.
          </li>
        </ul>
      </Typography>
    </Box>
  );
};

export default Overview;
