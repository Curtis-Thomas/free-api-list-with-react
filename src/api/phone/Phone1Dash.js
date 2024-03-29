import { Box } from "@mui/material";
import BtnRouting from "../../components/BtnRouting";
import NavBar from "../../navigation/NavBar";

const PhoneDash = () => {
  return (
    <Box>
      <NavBar link="/PhoneDash" />
      <Box>
        <BtnRouting btnName="" navigateTo="" />
      </Box>
    </Box>
  );
};

export default PhoneDash;
