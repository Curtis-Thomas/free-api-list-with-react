import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import React from "react";

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
    <Box
      sx={{
        display: "flex",
        marginBottom: 3,
        width: "100%",
        alignItems: "stretch",
        justifyContent: "space-evenly",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Link
          onClick={handleClickHome}
          to="/"
          style={{
            padding: 2,
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "#313335",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Home
        </Link>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Link
          onClick={handleClick}
          to={link}
          style={{
            color: "#313335",
            padding: 2,
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          {link}
        </Link>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Link
          to={link}
          style={{
            color: "#313335",
            padding: 2,
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          {route2}
        </Link>
      </Box>
    </Box>
  );
};

export default NavBar;
