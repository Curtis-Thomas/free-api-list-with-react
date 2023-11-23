import { Box, Grid } from "@mui/material";
import NavBar from "../../core/main/navigation/NavBar";
import CardRouting from "../../core/main/CardRouting";

const EntertainmentDash = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation bar */}
      <NavBar link="/EntertainmentDash" />

      {/* Cards in a grid layout */}
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Card for Chuck Norris */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Chuck Norris"
            navigateTo="EntertainmentChuckNorris"
            tags=""
            description=""
            difficulty=""
          />
        </Grid>

        {/* Card for Corp Buzz Words */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Corp Buzz Words"
            navigateTo="EntertainmentCorpBuzzWords"
            tags=""
            description=""
            difficulty=""
          />
        </Grid>

        {/* Card for Techy */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Techy"
            navigateTo="EntertainmentTechy"
            tags=""
            description=""
            difficulty=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EntertainmentDash;
