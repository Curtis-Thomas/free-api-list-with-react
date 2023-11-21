import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";
import GitHubButton from "react-github-btn";
import DescriptionIcon from "@mui/icons-material/Description";

function Hero() {
  const navigate = useNavigate();

  const handleDocsClick = () => {
    navigate("Docs");
  };
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
      <Box
        sx={{
          width: "50%",
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
      <Box
        sx={{
          width: "50%",
          backgroundColor: "#24292e",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <Button
          onClick={handleDocsClick}
          sx={{
            width: "50%",
            backgroundColor: "#24292e",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "solid 1px #BBBBBB",
            color: "#BBBBBB",
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginRight: "16px", color: "#BBBBBB" }}
          >
            Docs
          </Typography>
          <DescriptionIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;
