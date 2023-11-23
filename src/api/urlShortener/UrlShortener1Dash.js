import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../navigation/NavBar";

const UrlShortenerDash = () => {
  return (
    <Box>
      <NavBar link="/UrlShortenerDash" />
      <Box>
        <BtnRouting btnName="" navigateTo="" />
      </Box>
    </Box>
  );
};

export default UrlShortenerDash;
