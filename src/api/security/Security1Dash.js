import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../navigation/NavBar";

const SecurityDash = () => {
  return (
    <Box>
      <NavBar link="/SecurityDash" />
      <Box>
        <BtnRouting btnName="" navigateTo="" />
      </Box>
    </Box>
  );
};

export default SecurityDash;
