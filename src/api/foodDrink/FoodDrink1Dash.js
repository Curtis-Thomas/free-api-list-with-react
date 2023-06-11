import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../core/main/navigation/NavBar";

const FoodDrinkDash = () => {
  return (
    <Box>
      <NavBar link="/FoodDrinkDash" />
      <Box>
        <BtnRouting btnName="" navigateTo="" />
      </Box>
    </Box>
  );
};

export default FoodDrinkDash;
