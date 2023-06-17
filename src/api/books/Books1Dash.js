import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../core/main/navigation/NavBar";

const BooksDash = () => {
  return (
    <Box>
      <NavBar link="/BooksDash" />
      <Box>
        <BtnRouting btnName="ABiblia Digital" navigateTo="ABibliaDigital" />
        <BtnRouting btnName="Bible Api" navigateTo="BibleApi" />
      </Box>
    </Box>
  );
};

export default BooksDash;
