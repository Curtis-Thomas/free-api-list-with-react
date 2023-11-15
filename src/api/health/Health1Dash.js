import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../core/main/navigation/NavBar";

const HealthDash = () => {
  return (
    <Box>
      <NavBar link="/HealthDash" />
      <Box>
        <BtnRouting
          btnName="Makeup API"
          navigateTo="HealthMakeupApi"
          backgroundColor="#0077ba"
          textColor="white"
        />
      </Box>
    </Box>
  );
};

export default HealthDash;
