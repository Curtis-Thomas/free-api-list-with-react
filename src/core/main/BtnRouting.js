import { useNavigate } from "react-router-dom";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const BtnRouting = ({ btnName, navigateTo, backgroundColor, textColor }) => {
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
        marginBottom: 2,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      <Button
        fullWidth={true}
        onClick={handleClick}
        style={{ color: `${textColor}` }}
      >
        {btnName}
      </Button>
    </Box>
  );
};

export default BtnRouting;
