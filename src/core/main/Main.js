import { Box } from "@mui/material";

import BtnRouting from "./BtnRouting";
import NavBar from "./navigation/NavBar";

const Main = () => {
  return (
    <Box>
      <NavBar />

      <Box>
        <BtnRouting
          btnName="Animals"
          navigateTo="/AnimalsDash"
          backgroundColor="#1976D2"
          textColor="white"
        />
        <BtnRouting
          btnName="Anime"
          navigateTo="/AnimeDash"
          backgroundColor="white"
          textColor="#1976D2"
        />
      </Box>
    </Box>
  );
};

export default Main;
