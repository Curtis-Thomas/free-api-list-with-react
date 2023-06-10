import { Box } from "@mui/material";

import BtnRouting from "./BtnRouting";
import NavBar from "./navigation/NavBar";

const Main = () => {
  return (
    <Box>
      <NavBar />

      <Box>
        <BtnRouting btnName="Animals" navigateTo="/AnimalsDash" />
      </Box>
    </Box>
  );
};

export default Main;
