import React from "react";
import { Box, Typography, Link, useTheme } from "@mui/material";

const GettingStartedContent = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        border: "solid 1px",
        padding: 2,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Getting Started with the Free API List with React Project
      </Typography>
      <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
        To start exploring and contributing to the Free API List with React
        project, follow these simple steps:
      </Typography>
      <Typography paragraph>
        <strong>1. Clone the Repository:</strong>
        <br />
        Use the following command to clone the project repository to your local
        machine:
        <br />
        <code>
          git clone
          https://github.com/curtis-thomas/free-api-list-with-react.git
        </code>
      </Typography>
      <Typography paragraph>
        <strong>2. Install Dependencies:</strong>
        <br />
        Navigate to the project directory and install the required dependencies:
        <br />
        <code>npm install</code>
      </Typography>
      <Typography paragraph>
        <strong>3. Start the Development Server:</strong>
        <br />
        Launch the development server to view the project in your browser:
        <br />
        <code>npm start</code>
      </Typography>
      <Typography paragraph>
        For more details on contributing, please refer to the{" "}
        <Link href="#" underline="hover">
          Contributing Document
        </Link>
        .
      </Typography>
      <Typography paragraph>
        If you encounter any issues or have questions, don't hesitate to reach
        out to the project maintainer.
      </Typography>
    </Box>
  );
};

export default GettingStartedContent;
