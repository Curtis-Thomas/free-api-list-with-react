import { Box, Grid, useTheme } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";

const BooksDash = () => {
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
      <NavBar link="/BooksDash" />

      {/* Cards in a grid layout */}
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Card for ABiblia Digital */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="ABiblia Digital"
            navigateTo="BooksABibliaDigital"
            tags="Books"
            description="RESTful Bible API with 7 versions, 4 languages and multiple features to simplify your day to day."
            difficulty="Easy"
          />
        </Grid>

        {/* Card for Bible Api */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Bible Api"
            navigateTo="BooksBibleApi"
            tags="Books"
            description="This is a tiny little web app that provides a JSON API for grabbing bible verses and passages."
            difficulty="Medium"
          />
        </Grid>

        {/* Card for Gutendex */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Gutendex"
            navigateTo="BooksGutendex"
            tags="Books"
            description="JSON web API for Project Gutenberg ebook metadata"
            difficulty="Medium"
          />
        </Grid>

        {/* Card for PoetryDB */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="PoetryDB"
            navigateTo="BooksPoetryDB"
            tags="Books"
            description="PoetryDB is an API for internet poets."
            difficulty="Medium"
          />
        </Grid>

        {/* Card for Quran Cloud */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardRouting
            cardName="Quran Cloud"
            navigateTo="BooksQuranCloud"
            tags="Books"
            description="The Al Quran Cloud allows you to read and hear the Quran being recited by Juz, Surah or Ayah. "
            difficulty="Medium"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BooksDash;
