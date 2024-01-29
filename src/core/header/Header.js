import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import {
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Tooltip,
  Hidden,
  useMediaQuery,
  Box,
  useTheme,
} from "@mui/material";

import BuildIcon from "@mui/icons-material/Build";
import DescriptionIcon from "@mui/icons-material/Description";

const Header = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width: 712px)");

  const handleToolsClick = () => {
    navigate("Tools");
    handleMenuClose();
  };

  const handleDocsClick = () => {
    navigate("Docs");
    handleMenuClose();
  };

  return (
    <Box
      position="fixed"
      width="100%"
      sx={{
        zIndex: 2,
        backgroundColor: theme.palette.background.default,
        height: "5vh",
      }}
    >
      <Toolbar>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div>
            <Typography variant="h6" component="div">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary.main,
                }}
              >
                Free API List
              </Link>
            </Typography>
          </div>

          <div style={{ textAlign: "right" }}>
            {isMobile ? (
              <Hidden mdUp></Hidden>
            ) : (
              <Hidden smDown>
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ marginRight: 5 }}
                >
                  <Tooltip title="Go to Tools" placement="bottom">
                    <IconButton onClick={handleToolsClick} edge="start">
                      <BuildIcon sx={{ margin: 1 }} />
                      <Typography variant="body1">Tools</Typography>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="View Documentation" placement="bottom">
                    <IconButton onClick={handleDocsClick} edge="start">
                      <DescriptionIcon sx={{ margin: 1 }} />
                      <Typography variant="body1">Docs</Typography>
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Hidden>
            )}
          </div>
        </div>
      </Toolbar>
    </Box>
  );
};

export default Header;
