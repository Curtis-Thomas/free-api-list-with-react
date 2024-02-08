import { Box, Grid, useTheme } from "@mui/material";
import CardRouting from "../../components/CardRouting";
import NavBar from "../../navigation/NavBar";

const GeoCodingDash = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        minHeight: "110vh",
      }}
    >
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="GeoJS"
            navigateTo="GeoCodingGeoJS"
            tags="geocoding"
            description="A REST/JSON/JSONP IP Geolocation lookup API without any rate limits"
            difficulty="Beginner"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Get The Data"
            navigateTo="GeoCodingGettheData"
            tags="geocoding"
            description="Convert easting and northing to latitude and longitude"
            difficulty="Beginner"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GeoCodingDash;
