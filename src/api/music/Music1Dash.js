import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../navigation/NavBar";

const MusicDash = () => {
  return (
    <Box>
      <NavBar link="/MusicDash" />
      <Box>
        <BtnRouting btnName="" navigateTo="" />
      </Box>
    </Box>
  );
};

export default MusicDash;
