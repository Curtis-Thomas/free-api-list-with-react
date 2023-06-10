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
          navigateTo="ABibliaDigital"
          backgroundColor="#0077ba"
          textColor="white"
        />
        <BtnRouting
          btnName="Bible Api"
          navigateTo="BibleApi"
          backgroundColor="#0077ba"
          textColor="white"
        />
      </Box>
    </Box>
  );
};

export default BooksDash;
