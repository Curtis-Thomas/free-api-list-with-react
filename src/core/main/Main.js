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
          backgroundColor="#0077ba"
          textColor="white"
        />
        <BtnRouting
          btnName="Anime"
          navigateTo="/AnimeDash"
          backgroundColor="white"
          textColor="#0077ba"
        />
        <BtnRouting
          btnName="Anti-Malware"
          navigateTo="/AntiMalwareDash"
          backgroundColor="white"
          textColor="#0077ba"
        />
        <BtnRouting
          btnName="Art & Design"
          navigateTo="/ArtDesignDash"
          backgroundColor="#0077ba"
          textColor="white"
        />
        <BtnRouting
          btnName="Authentication"
          navigateTo="/AuthenticationDash"
          backgroundColor="white"
          textColor="#0077ba"
        />
      </Box>
    </Box>
  );
};

export default Main;
