import { Box, Grid } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";

const SportsFitnessDash = () => {
  return (
    <Box>
      <NavBar link="/SportsFitnessDash" />
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Card for Daily Cat Facts */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="BallDontLie"
            navigateTo="SportsFitnessBallDontLie"
            tags="SportsFitness"
            description="You can use our free API to access NBA related data. No email required. No API key required."
            difficulty="Beginner"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="City Bikes"
            navigateTo="SportsFitnessCityBikes"
            tags="SportsFitness"
            description="CityBikes data."
            difficulty="Medium"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SportsFitnessDash;
