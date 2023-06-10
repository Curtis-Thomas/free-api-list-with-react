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
        <BtnRouting
          btnName="Anti-Malware"
          navigateTo="/AntiMalwareDash"
          backgroundColor="white"
          textColor="#1976D2"
        />
        <BtnRouting
          btnName="Art & Design"
          navigateTo="/ArtDesignDash"
          backgroundColor="#1976D2"
          textColor="white"
        />
      </Box>
    </Box>
  );
};

export default Main;
