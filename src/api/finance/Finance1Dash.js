import { Box, useTheme } from "@mui/material";
import BtnRouting from "../../components/BtnRouting";
import NavBar from "../../navigation/NavBar";

const FinanceDash = () => {
  const theme = useTheme();
  return (
    <Box>
      <NavBar link="/FinanceDash" />
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: theme.palette.background.default,
          minHeight: "110vh",
        }}
      >
        <BtnRouting btnName="" navigateTo="" />
      </Box>
    </Box>
  );
};

export default FinanceDash;
