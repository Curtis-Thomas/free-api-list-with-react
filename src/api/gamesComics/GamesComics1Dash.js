import { Box, useTheme, Grid } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";

const GamesComicsDash = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        minHeight: "110vh",
      }}
    >
      <NavBar link="/GamesComicsDash" />
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Card for ABiblia Digital */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Amiibo"
            navigateTo="GamesComicsAmiibo"
            tags="Books"
            description="It returns information of all amiibos or specific amiibo as a list."
            difficulty="Easy"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GamesComicsDash;
