import { Box, Grid } from "@mui/material";
import NavBar from "../../navigation/NavBar";
import CardRouting from "../../components/CardRouting";

const BooksDash = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation bar */}
      <NavBar link="/BooksDash" />

      {/* Cards in a grid layout */}
      <Grid container spacing={2} sx={{ p: 3 }}>
        {/* Card for ABiblia Digital */}
       
          <CardRouting
            cardName="ABiblia Digital"
            navigateTo="BooksABibliaDigital"
            tags="Books"
            description="RESTful Bible API with 7 versions, 4 languages and multiple features to simplify your day to day."
            difficulty="Easy"
          />
        

        {/* Card for Bible Api */}
      
          <CardRouting
            cardName="Bible Api"
            navigateTo="BooksBibleApi"
            tags="Books"
            description="This is a tiny little web app that provides a JSON API for grabbing bible verses and passages."
            difficulty="Medium"
          />
        

        {/* Card for Gutendex */}
       
          <CardRouting
            cardName="Gutendex"
            navigateTo="BooksGutendex"
            tags="Books"
            description="JSON web API for Project Gutenberg ebook metadata"
            difficulty="Medium"
          />
       

        {/* Card for PoetryDB */}
       
          <CardRouting
            cardName="PoetryDB"
            navigateTo="BooksPoetryDB"
            tags="Books"
            description="PoetryDB is an API for internet poets."
            difficulty="Medium"
          />
        

        {/* Card for Quran Cloud */}
       
          <CardRouting
            cardName="Quran Cloud"
            navigateTo="BooksQuranCloud"
            tags="Books"
            description="The Al Quran Cloud allows you to read and hear the Quran being recited by Juz, Surah or Ayah. "
            difficulty="Medium"
          />
        </Grid>
      
    </Box>
  );
};

export default BooksDash;
