import { Box, Typography } from "@mui/material";
import NavBar from "../../core/main/navigation/NavBar";

const AnimeDash = () => {
  return (
    <Box>
      {/* Navigation bar */}
      <NavBar link="/AnimeDash" />

      <Box>
        {/* Heading */}
        <Typography>Anime Dash</Typography>
      </Box>
    </Box>
  );
};

export default AnimeDash;
