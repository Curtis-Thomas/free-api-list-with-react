import { Box, Grid } from "@mui/material";
import CardRouting from "../../components/CardRouting";
import NavBar from "../../navigation/NavBar";

const GeoCodingDash = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar link="/GeoCodingDash" />
      <Grid container spacing={2} sx={{ p: 3 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="administrive-divisions-db"
            navigateTo="GeoCodingadministrive-divisions-db"
            tags="geocoding"
            description="Administrative divisons of countries as a JSON API over Github"
            difficulty="Beginner"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GeoCodingDash;
