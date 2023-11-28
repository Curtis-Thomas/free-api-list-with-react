import { Box, Grid } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";

const ArtDesignDash = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation bar */}
      <NavBar link="/ArtDesignDash" />

      {/* Cards in a grid layout */}
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Card for Artic */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Artic"
            navigateTo="ArtDesignArtic"
            tags="Art"
            description="The Art Institute of Chicago API provides JSON-formatted data as a REST-style service that allows developers to explore and integrate the museum’s public data into their projects."
            difficulty="Medium"
          />
        </Grid>

        {/* Card for EmojiHub */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="EmojiHub"
            navigateTo="ArtDesignEmojiHub"
            tags="Art"
            description="A simple & free HTTP API with emojis for your cool apps"
            difficulty="Easy"
          />
        </Grid>

        {/* Card for MetMuseum */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="MetMuseum"
            navigateTo="ArtDesignMetMuseum"
            tags=""
            description=""
            difficulty=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ArtDesignDash;
