import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Grid } from "@mui/material";
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
        padding: 2,
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={6} display="flex" justifyContent="center">
          <Typography variant="h6" sx={{ marginRight: 2, color: "white" }}>
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
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="center">
          <Button
            onClick={handleDocsClick}
            startIcon={<DescriptionIcon />}
            sx={{
              border: "1px solid #BBBBBB",
              color: "#BBBBBB",
              backgroundColor: "#343a40",
              "&:hover": {
                color: "white",
                borderColor: "white",
              },
            }}
          >
            <Typography variant="h6" sx={{ color: "#BBBBBB" }}>
              Docs
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
