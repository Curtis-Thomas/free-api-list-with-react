import React from "react";
import { Box, Container, Typography } from "@mui/material";
import NavBar from "../core/main/navigation/NavBar";
import ApiListings from "./apiListings/ApiListings";
import ReferenceGuide from "./referenceGuide/ReferenceGuide";
import GettingStarted from "./Gettingstarted";
import Overview from "./Overview";
import Contributors from "./Contributors";

const Documentation = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      <NavBar route2="/Docs" />
      <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: 3 }}>
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
