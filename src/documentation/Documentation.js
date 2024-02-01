import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import NavBar from "../navigation/NavBar";
import ApiListings from "./apiListings/ApiListings";
import ReferenceGuide from "./referenceGuide/ReferenceGuide";
import GettingStarted from "./Gettingstarted";
import Overview from "./Overview";
import Contributors from "./Contributors";

const Documentation = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <NavBar route2="/Docs" />
      <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ marginBottom: 3, color: theme.palette.text.primary }}
        >
          Free API List with React Project Documentation
        </Typography>
        <Contributors />
        <Overview />
        <GettingStarted />
        <ApiListings />
        <ReferenceGuide />
      </Container>
    </Box>
  );
};

export default Documentation;
