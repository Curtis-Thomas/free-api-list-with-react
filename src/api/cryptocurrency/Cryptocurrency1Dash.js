import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../core/main/navigation/NavBar";

const CryptocurrencyDash = () => {
  return (
    <Box>
      <NavBar link="/CryptocurrencyDash" />
      <Box>
        <BtnRouting btnName="" navigateTo="" />
      </Box>
    </Box>
  );
};

export default CryptocurrencyDash;
