import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";

const AnimalDash = () => {
  return (
    <Box>
      <BtnRouting btnName="Daily Cat Facts" navigateTo="AnimalsDailyCatFacts" />
    </Box>
  );
};

export default AnimalDash;
