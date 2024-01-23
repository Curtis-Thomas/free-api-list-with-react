import { Box, Grid } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";

const EntertainmentDash = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation bar */}
      <NavBar link="/EntertainmentDash" />

      {/* Cards in a grid layout */}
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Card for Chuck Norris */}
       
          <CardRouting
            cardName="Chuck Norris"
            navigateTo="EntertainmentChuckNorris"
            tags="Entertainment"
            description="Chuck Norris facts are satirical factoids about martial artist and actor Chuck Norris."
            difficulty="Easy"
          />
       

        {/* Card for Corp Buzz Words */}
       
          <CardRouting
            cardName="Corp Buzz Words"
            navigateTo="EntertainmentCorpBuzzWords"
            tags="Entertainment"
            description="Corporate buzzword generator to randomly pick out phrases, which can help your application get ahead in an industry where spin."
            difficulty="Easy"
          />
       

        {/* Card for Techy */}
     
          <CardRouting
            cardName="Techy"
            navigateTo="EntertainmentTechy"
            tags="Entertainment"
            description="Generate cool tech-savvy sounding phrases easily."
            difficulty="Easy"
          />
        </Grid>
      
    </Box>
  );
};

export default EntertainmentDash;
