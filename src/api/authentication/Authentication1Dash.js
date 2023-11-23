import { Box } from "@mui/material";
import BtnRouting from "../../components/BtnRouting";
import NavBar from "../../navigation/NavBar";

const AuthenticationDash = () => {
  return (
    <Box>
      <NavBar link="/AuthenticationDash" />
      <Box>
        <BtnRouting btnName="" navigateTo="" />
      </Box>
    </Box>
  );
};

export default AuthenticationDash;
