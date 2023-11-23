import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../navigation/NavBar";

const VehicleDash = () => {
  return (
    <Box>
      <NavBar link="/VehicleDash" />
      <Box>
        <BtnRouting btnName="" navigateTo="" />
      </Box>
    </Box>
  );
};

export default VehicleDash;
