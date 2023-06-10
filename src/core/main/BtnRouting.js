import { useNavigate } from "react-router-dom";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const BtnRouting = ({ btnName, navigateTo }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <Box
      sx={{
        border: "solid 1px black",
        width: isMobile ? "100%" : "33vw",
        maxWidth: "100%",
      }}
    >
      <Button fullWidth={true} onClick={handleClick}>
        {btnName}
      </Button>
    </Box>
  );
};

export default BtnRouting;
