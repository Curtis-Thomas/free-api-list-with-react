import { Box } from "@mui/material";
import BtnRouting from "../../components/BtnRouting";
import NavBar from "../../navigation/NavBar";

const TestDataDash = () => {
  return (
    <Box>
      <NavBar link="/TestDataDash" />
      <Box>
        <BtnRouting btnName="" navigateTo="" />
      </Box>
    </Box>
  );
};

export default TestDataDash;
