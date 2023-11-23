import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../navigation/NavBar";

const PatentDash = () => {
  return (
    <Box>
      <NavBar link="/PatentDash" />
      <Box>
        <BtnRouting btnName="" navigateTo="" />
      </Box>
    </Box>
  );
};

export default PatentDash;
