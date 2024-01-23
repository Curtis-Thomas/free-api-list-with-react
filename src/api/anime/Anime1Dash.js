import { Box, Grid } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";

const AnimeDash = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation bar */}
      <NavBar link="/AnimeDash" />

      {/* Cards in a grid layout */}
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Card for Nekos */}
       
          <CardRouting
            cardName="Nekos"
            navigateTo="Nekos"
            tags="Anime"
            description="nekos.best is a RESTful API serving fully SFW and high quality anime images and GIFs."
            difficulty="Easy"
          />
       

        {/* Card for StudioGhibli */}
      
          <CardRouting
            cardName="StudioGhibli"
            navigateTo="StudioGhibli"
            tags="Anime"
            description="The Studio Ghibli API catalogs the people, places, and things found in the worlds of Ghibli."
            difficulty="Medium"
          />
        </Grid>
      
    </Box>
  );
};

export default AnimeDash;
