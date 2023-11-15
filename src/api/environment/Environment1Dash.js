import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../core/main/navigation/NavBar";

const EnvironmentDash = () => {
  return (
    <Box>
      <NavBar link="/EnvironmentDash" />
      <Box>
        <BtnRouting
          btnName="UK Carbon Intensity"
          navigateTo="EnvironmentUKCarbonIntensity"
          backgroundColor="#0077ba"
          textColor="white"
        />
      </Box>
    </Box>
  );
};

export default EnvironmentDash;
