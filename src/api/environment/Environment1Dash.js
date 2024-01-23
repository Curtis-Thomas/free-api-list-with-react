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
        
          <CardRouting
            cardName="UK Carbon Intensity"
            navigateTo="EnvironmentUKCarbonIntensity"
            tags="environment"
            description="This is the Official Carbon Intensity API for Great Britain developed by National Grid."
            difficulty="Medium"
          />
        </Grid>
      
    </Box>
  );
};

export default EnvironmentDash;
