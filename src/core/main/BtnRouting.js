import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

const BtnRouting = ({ btnName, navigateTo, backgroundColor, textColor }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <Box
      sx={{
        width: "95%",
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
