import { Box, Grid } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";

const PersonalityDash = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar link="/PersonalityDash" />
      <Grid container spacing={2} sx={{ p: 3 }}>
     
          <CardRouting
            cardName="Quote Clear"
            navigateTo="PersonalityQuoteClear"
            tags="personality"
            description="Ever growing list of quotes from James Clear's 3-2-1 Newsletter."
            difficulty="easy"
          />
        </Grid>
      
    </Box>
  );
};

export default PersonalityDash;
