import { Box, Typography } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../core/main/navigation/NavBar";

const ArtDesignDash = () => {
  return (
    <Box>
      <NavBar link="/ArtDesignDash" />
      <Box>
        <Typography>ArtDesign Dash</Typography>
        <BtnRouting btnName="Artic" navigateTo="ArtDesignArtic" />
      </Box>
    </Box>
  );
};

export default ArtDesignDash;
