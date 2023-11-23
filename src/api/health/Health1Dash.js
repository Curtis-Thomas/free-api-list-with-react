import { Box, Grid } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../core/main/CardRouting";

const HealthDash = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar link="/HealthDash" />
      <Grid container spacing={2} sx={{ p: 3 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Makeup API"
            navigateTo="HealthMakeupApi"
            tags=""
            description=""
            difficulty=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HealthDash;
