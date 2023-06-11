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
        width: isMobile ? "100%" : "30%",
        maxWidth: "100%",
        marginBottom: 2,
        backgroundColor: `${backgroundColor}`,
        border: "solid 1px 8d6cab ",
        borderRadius: "3px",
      }}
    >
      <Button
        fullWidth={true}
        onClick={handleClick}
        style={{ color: `${textColor}` }}
        sx={{ border: "solid 1px #0077ba" }}
      >
        {btnName}
      </Button>
    </Box>
  );
};

export default BtnRouting;
