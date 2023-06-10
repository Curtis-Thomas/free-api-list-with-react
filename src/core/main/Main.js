import { Box, Typography } from "@mui/material";

import BtnRouting from "./BtnRouting";
import NavBar from "./navigation/NavBar";

const Main = () => {
  return (
    <Box>
      <NavBar />
      <Box sx={{ textAlign: "center", marginBottom: 5, marginTop: 5 }}>
        <Typography>
          Welcome to the Free API List with React <br />
          <br /> Discover a comprehensive collection of free APIs across
          different categories and explore their endpoints, request parameters,
          and response formats.
        </Typography>
      </Box>

      <Box>
        <BtnRouting btnName="Animals" navigateTo="/AnimalsDash" />
      </Box>
    </Box>
  );
};

export default Main;
