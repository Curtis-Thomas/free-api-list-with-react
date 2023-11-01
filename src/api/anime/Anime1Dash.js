import { Box } from "@mui/material";
import NavBar from "../../core/main/navigation/NavBar";
import BtnRouting from "../../core/main/BtnRouting";

const AnimeDash = () => {
  return (
    <Box>
      {/* Navigation bar */}
      <NavBar link="/Anime" />

      <Box>
        <BtnRouting
          btnName="Nekos"
          navigateTo="Nekos"
          backgroundColor="#0077ba"
          textColor="white"
        />
      </Box>
      <Box>
        <BtnRouting
          btnName="StudioGhibli"
          navigateTo="StudioGhibli"
          backgroundColor="#0077ba"
          textColor="white"
        />
      </Box>
    </Box>
  );
};

export default AnimeDash;
