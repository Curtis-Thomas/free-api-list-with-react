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
        
          <CardRouting
            cardName="Artic"
            navigateTo="ArtDesignArtic"
            tags="Art"
            description="The Art Institute of Chicago API provides JSON-formatted data as a REST-style service that allows developers to explore and integrate the museum’s public data into their projects."
            difficulty="Medium"
          />
       

        {/* Card for EmojiHub */}
       
          <CardRouting
            cardName="EmojiHub"
            navigateTo="ArtDesignEmojiHub"
            tags="Art"
            description="A simple & free HTTP API with emojis for your cool apps"
            difficulty="Easy"
          />
        

        {/* Card for MetMuseum */}
       
          <CardRouting
            cardName="MetMuseum"
            navigateTo="ArtDesignMetMuseum"
            tags="Art"
            description="The Metropolitan Museum of Art provides select datasets of information on more than 470,000 artworks in its Collection for unrestricted commercial and noncommercial use."
            difficulty="Medium"
          />
        </Grid>
      
    </Box>
  );
};

export default ArtDesignDash;
