import { Box } from "@mui/material";
import BtnRouting from "../../components/BtnRouting";
import NavBar from "../../navigation/NavBar";

const OpenSourceDash = () => {
  return (
    <Box>
      <NavBar link="/OpenSourceDash" />
      <Box>
        <BtnRouting btnName="" navigateTo="" />
      </Box>
    </Box>
  );
};

export default OpenSourceDash;
