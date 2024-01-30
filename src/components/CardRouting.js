import { useNavigate } from "react-router-dom";
import { Box, Card, Typography, ButtonBase } from "@mui/material";

const CardRouting = ({
  cardName,
  navigateTo,
  tags,
  description,
  difficulty,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <ButtonBase
      onClick={handleClick}
      sx={{
        width: "100%",
        height: "100%",
        textAlign: "left",
        padding: 1,
        borderRadius: 1,
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.04)", // subtle hover effect
        },
      }}
    >
      <Card
        sx={{
          p: 2,
          m: 0.10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // Align items at the start of the flex container
          width: "100%",
          height: "100%",
          position: "relative", // Ensure positioning context for children
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            paddingBottom: "20px", // Add padding to the top
            position: "sticky",
            top: "0",
            backgroundColor: "white", // Optional: Set background color if needed
            zIndex: 1, // Ensure it's above other elements
          }}
        >
          {cardName}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0.5,
            mb: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Tags:
          </Typography>
          {tags}
        </Box>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
        <Typography
          variant="caption"
          sx={{ alignSelf: "flex-end", color: "primary.main" }}
        >
          Difficulty: {difficulty}
        </Typography>
      </Card>
    </ButtonBase>
  );
};

export default CardRouting;
