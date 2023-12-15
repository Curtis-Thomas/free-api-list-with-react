import { Box, Grid } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";

const AnimalDash = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation bar */}
      <NavBar link="/AnimalsDash" />

      {/* Cards in a responsive grid layout */}
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Card for Daily Cat Facts */}
        <Grid>
          <CardRouting
            cardName="Daily Cat Facts"
            navigateTo="AnimalsDailyCatFacts"
            tags="Animals"
            description="Daily cat facts!"
            difficulty="Beginner"
          />
        </Grid>

        {/* Card for Cat as a service */}
        <Grid>
          <CardRouting
            cardName="Cat as a service"
            navigateTo="AnimalsCataas"
            tags="Animals"
            description="Cat as a service (CATAAS) is a REST API to spread peace and love (or not) thanks to cats."
            difficulty="Easy"
          />
        </Grid>

        {/* Card for Dog API */}
        <Grid>
          <CardRouting
            cardName="Dog API"
            navigateTo="AnimalsDogApi"
            tags="Animals"
            description="The Dog API provides a wealth of information on dog breeds, groups, and fun facts. Access and integrate this data into your website or application with our easy-to-use JSON API."
            difficulty="Easy"
          />
        </Grid>

        {/* Card for Dog */}
        <Grid>
          <CardRouting
            cardName="Dog"
            navigateTo="AnimalsDog"
            tags="Animals"
            description="The internet's biggest collection of open source dog pictures."
            difficulty="Easy"
          />
        </Grid>

        {/* Card for Meow Facts */}
        <Grid>
          <CardRouting
            cardName="Meow Facts"
            navigateTo="AnimalsMeowFacts"
            tags="Animals"
            description="A simple api that returns a random fact about cats on a GET request"
            difficulty="Easy"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnimalDash;
