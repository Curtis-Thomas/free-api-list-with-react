import { Box, Grid } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";


const DictionaryDash = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar link="/DictionaryDash" />
      <Grid container spacing={2} sx={{ p: 3 }}>
        
          <CardRouting
            cardName="Free Dictionary"
            navigateTo="DictionaryFreeDictionary"
            tags="Dictionary"
            description="Get Definition of any English Word!"
            difficulty="Beginner"
          />
        </Grid>
      
    </Box>
  );
};

export default DictionaryDash;
