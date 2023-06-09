import { Box } from "@mui/material";

import BtnRouting from "./BtnRouting";

const Main = () => {
  return (
    <Box>
      <BtnRouting btnName="Animals" navigateTo="/AnimalsDash" />
    </Box>
  );
};

export default Main;
