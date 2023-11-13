import React from "react";
import { Box, Typography } from "@mui/material";
import GitHubButton from "react-github-btn";

function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#24292e",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
      }}
    >
      <Typography variant="h6" sx={{ marginRight: "16px", color: "white" }}>
        GitHub
      </Typography>
      <GitHubButton
        href="https://github.com/Curtis-Thomas/free-api-list-with-react"
        data-icon="octicon-star"
        aria-label="Star buttons/github-buttons on GitHub"
        data-show-count="true"
        data-size="large"
        data-count-href="/Curtis-Thomas/free-api-list-with-react/stargazers"
        data-count-api="/repos/Curtis-Thomas/free-api-list-with-react#stargazers_count"
        data-count-aria-label="# stargazers on GitHub"
      >
        Star
      </GitHubButton>
    </Box>
  );
}

export default Hero;
