import { Box, useTheme } from "@mui/material";
import BtnRouting from "../../components/BtnRouting";
import NavBar from "../../navigation/NavBar";

const FoodDrinkDash = () => {

  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.background.default, minHeight: "110vh",}}>
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
