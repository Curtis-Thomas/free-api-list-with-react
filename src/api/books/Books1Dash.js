import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../core/main/navigation/NavBar";

const BooksDash = () => {
  return (
    <Box>
      <NavBar link="/BooksDash" />
      <Box>
        <BtnRouting
          btnName="ABiblia Digital"
          navigateTo="BooksABibliaDigital"
        />
        <BtnRouting btnName="Bible Api" navigateTo="BooksBibleApi" />
        <BtnRouting btnName="Gutendex" navigateTo="BooksGutendex" />
      </Box>
    </Box>
  );
};

export default BooksDash;
