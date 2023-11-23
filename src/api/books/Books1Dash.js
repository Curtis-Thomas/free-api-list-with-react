import { Box, Grid } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../core/main/CardRouting";

const BooksDash = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation bar */}
      <NavBar link="/BooksDash" />

      {/* Cards in a grid layout */}
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Card for ABiblia Digital */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="ABiblia Digital"
            navigateTo="BooksABibliaDigital"
            tags=""
            description=""
            difficulty=""
          />
        </Grid>

        {/* Card for Bible Api */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Bible Api"
            navigateTo="BooksBibleApi"
            tags=""
            description=""
            difficulty=""
          />
        </Grid>

        {/* Card for Gutendex */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Gutendex"
            navigateTo="BooksGutendex"
            tags=""
            description=""
            difficulty=""
          />
        </Grid>

        {/* Card for PoetryDB */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="PoetryDB"
            navigateTo="BooksPoetryDB"
            tags=""
            description=""
            difficulty=""
          />
        </Grid>

        {/* Card for Quran Cloud */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Quran Cloud"
            navigateTo="BooksQuranCloud"
            tags=""
            description=""
            difficulty=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BooksDash;
