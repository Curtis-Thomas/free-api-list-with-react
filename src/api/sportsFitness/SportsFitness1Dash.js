import { Box, Grid } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";

const SportsFitnessDash = () => {
  return (
    <Box>
      <NavBar link="/SportsFitnessDash" />
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Card for Daily Cat Facts */}
       
          <CardRouting
            cardName="BallDontLie"
            navigateTo="SportsFitnessBallDontLie"
            tags="SportsFitness"
            description="You can use our free API to access NBA related data. No email required. No API key required."
            difficulty="Beginner"
          />
       
        
          <CardRouting
            cardName="City Bikes"
            navigateTo="SportsFitnessCityBikes"
            tags="SportsFitness"
            description="CityBikes data."
            difficulty="Medium"
          />
        </Grid>
      
    </Box>
  );
};

export default SportsFitnessDash;
