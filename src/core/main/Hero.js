import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Grid, useTheme } from "@mui/material";
import GitHubButton from "react-github-btn";
import DescriptionIcon from "@mui/icons-material/Description";

function Hero() {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleDocsClick = () => {
    navigate("Docs");
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box
            sx={{
              height: "5vh",
              width: "50%",
              display: "flex",
              justifyContent: "right",
            }}
          >
            <Typography
              variant="h6"
              sx={{ marginRight: 2, color: theme.palette.text.primary }}
            >
              GitHub
            </Typography>
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "50%",
              display: "flex",
              justifyContent: "left",
            }}
          >
            <GitHubButton
              href="https://github.com/Curtis-Thomas/free-api-list-with-react"
              data-icon="octicon-star"
              aria-label="Star buttons/github-buttons on GitHub"
              data-show-count="true"
              data-size="large"
            >
              Star
            </GitHubButton>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Button
            onClick={handleDocsClick}
            startIcon={<DescriptionIcon />}
            sx={{
              border: "1px solid",
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.background.default,
              "&:hover": {
                borderColor: theme.palette.text.secondary,
                opacity: 0.8,
                border: "1px dashed",
              },
            }}
          >
            <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
              Docs
            </Typography>
          </Button>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: "center", paddingTop: 4 }}>
          <Box>
            <Typography
              component="h1"
              variant="h4"
              color={theme.palette.text.primary}
            >
              Discover the Best Free APIs - Your Ultimate Open-Source API
              Directory
            </Typography>
            <Typography
              component="h2"
              variant="h5"
              sx={{ paddingTop: 1 }}
              color={theme.palette.text.secondary}
            >
              Seamlessly Integrate with Diverse and Reliable Free APIs
            </Typography>
            <Typography
              component="body1"
              variant="body1"
              sx={{ paddingTop: 2 }}
              color={theme.palette.text.secondary}
            >
              Welcome to our comprehensive Free API List, the go-to resource for
              developers and businesses seeking reliable, open-source APIs. Our
              curated directory offers an extensive range of free APIs, spanning
              various categories like data analytics, machine learning, weather,
              and more. Perfect for innovators and startups, our platform
              ensures easy access and seamless integration, empowering your
              projects with the best free tools available. Dive into our diverse
              collection and find the ideal API for your next big idea!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
