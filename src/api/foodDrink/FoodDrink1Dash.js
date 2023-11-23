import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../navigation/NavBar";

const FoodDrinkDash = () => {
  return (
    <Box>
      <NavBar link="/FoodDrinkDash" />
      <Box>
        <BtnRouting
          btnName=""
          navigateTo=""
          // backgroundColor="#0077ba"
          // textColor="white"
        />
      </Box>
    </Box>
  );
};

export default FoodDrinkDash;
