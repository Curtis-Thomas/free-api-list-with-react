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
          m: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", height: "17.5%" }}
        >
          {cardName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0.5,
            mb: 1,
            height: "5%",
          }}
        >
          Tags:
          {tags}
        </Box>
        <Typography variant="body1" gutterBottom sx={{ height: "75%" }}>
          {description}
        </Typography>
        <Typography
          variant="caption"
          sx={{ alignSelf: "flex-end", color: "primary.main", height: "2.5%" }}
        >
          Difficulty: {difficulty}
        </Typography>
      </Card>
    </ButtonBase>
  );
};

export default CardRouting;
