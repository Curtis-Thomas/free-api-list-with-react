import { Box, Grid, useTheme } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";

const EntertainmentDash = () => {
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
      <NavBar link="/EntertainmentDash" />

      {/* Cards in a grid layout */}
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Card for Chuck Norris */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Chuck Norris"
            navigateTo="EntertainmentChuckNorris"
            tags="Entertainment"
            description="Chuck Norris facts are satirical factoids about martial artist and actor Chuck Norris."
            difficulty="Easy"
          />
        </Grid>

        {/* Card for Corp Buzz Words */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Corp Buzz Words"
            navigateTo="EntertainmentCorpBuzzWords"
            tags="Entertainment"
            description="Corporate buzzword generator to randomly pick out phrases, which can help your application get ahead in an industry where spin."
            difficulty="Easy"
          />
        </Grid>

        {/* Card for Techy */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Techy"
            navigateTo="EntertainmentTechy"
            tags="Entertainment"
            description="Generate cool tech-savvy sounding phrases easily."
            difficulty="Easy"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EntertainmentDash;
