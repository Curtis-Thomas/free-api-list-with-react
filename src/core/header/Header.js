import { Box } from "@mui/material";
import CategoryBtn from "../main/BtnRouting";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "8px",
      }}
    >
      <CategoryBtn btnName="Home" navigateTo="/" />
    </Box>
  );
};

export default Header;
