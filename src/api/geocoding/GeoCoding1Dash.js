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
            cardName="Administrative Divisions Db"
            navigateTo="GeocodingAdministrativeDivisionsDb"
            tags="geocoding"
            description="Administrative divisions of countries as a JSON API over Github"
            difficulty="Beginner"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GeoCodingDash;
