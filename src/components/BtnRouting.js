import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const BtnRouting = ({
  btnName,
  navigateTo,
  backgroundColor,
  textColor,
  amount,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "80%",
        maxWidth: "100%",
        marginBottom: 2,
        marginLeft: "auto",
        marginRight: "auto",
      }
      }
    >
      <Button
        fullWidth
        onClick={handleClick}
        sx={{
          color: textColor,
          backgroundColor: backgroundColor,
          "&:hover": {
            backgroundColor: backgroundColor,
            opacity: 0.9,
            color: "#24292e"
          },
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="button"
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            fontSize: "15px",
            paddingY: "4px", 
          }}
        >
          {btnName}{" "}
          {amount && <span style={{ paddingLeft: 0.5 }}>{amount}</span>}
        </Typography>
      </Button>
    </Box >
  );
};

export default BtnRouting;
