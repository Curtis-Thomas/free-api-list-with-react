import { Box, Grid } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../core/main/CardRouting";

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
            tags=""
            description=""
            difficulty=""
          />
        </Grid>

        {/* Card for EmojiHub */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="EmojiHub"
            navigateTo="ArtDesignEmojiHub"
            tags=""
            description=""
            difficulty=""
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
