import { Link, useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const NavBar = ({ link, route2 }) => {
  const navigate = useNavigate();

  const handleClickHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate(link);
  };

  return (
    <Box sx={{ display: "flex", marginBottom: 3 }}>
      <Box sx={{ marginRight: 1, border: "solid 1px #666666", padding: 2 }}>
        <Link onClick={handleClickHome} href={"/"}>
          Home
        </Link>
      </Box>
      <Box sx={{ marginRight: 1, border: "solid 1px #666666", padding: 2 }}>
        <Link onClick={handleClick} href={link}>
          {link}
        </Link>
      </Box>
      <Box sx={{ marginRight: 1, border: "solid 1px #666666", padding: 2 }}>
        <Typography> {route2}</Typography>
      </Box>
    </Box>
  );
};

export default NavBar;
