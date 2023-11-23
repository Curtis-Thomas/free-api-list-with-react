import { Box, Grid } from "@mui/material";

import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";

const EnvironmentDash = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation bar */}
      <NavBar link="/EnvironmentDash" />
      {/* Cards in a grid layout */}
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Card for Chuck Norris */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="UK Carbon Intensity"
            navigateTo="EnvironmentUKCarbonIntensity"
            tags=""
            description=""
            difficulty=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EnvironmentDash;
