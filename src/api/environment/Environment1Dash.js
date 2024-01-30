import { Box, Grid, useTheme } from "@mui/material";

import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";

const EnvironmentDash = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        minHeight: "110vh",
      }}
    >
      {/* Navigation bar */}
      <NavBar link="/EnvironmentDash" />
      {/* Cards in a grid layout */}
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Card for Chuck Norris */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="UK Carbon Intensity"
            navigateTo="EnvironmentUKCarbonIntensity"
            tags="environment"
            description="This is the Official Carbon Intensity API for Great Britain developed by National Grid."
            difficulty="Medium"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EnvironmentDash;
