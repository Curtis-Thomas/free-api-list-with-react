import { Box, Grid, useTheme } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";

const DictionaryDash = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        minHeight: "110vh",
      }}
    >
      <NavBar link="/DictionaryDash" />
      <Grid container spacing={2} sx={{ p: 3 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Free Dictionary"
            navigateTo="DictionaryFreeDictionary"
            tags="Dictionary"
            description="Get Definition of any English Word!"
            difficulty="Beginner"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DictionaryDash;
