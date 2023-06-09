import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

const BtnRouting = ({ btnName, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <Box sx={{ border: "solid 1px black", width: "33vw" }}>
      <Button fullWidth="true" onClick={handleClick}>
        {btnName}
      </Button>
    </Box>
  );
};

export default BtnRouting;
