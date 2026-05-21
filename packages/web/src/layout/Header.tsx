import BuildIcon from "@mui/icons-material/Build";
import DescriptionIcon from "@mui/icons-material/Description";
import { Box, IconButton, Stack, Toolbar, Tooltip, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      position="fixed"
      sx={{
        width: "100%",
        zIndex: 2,
        backgroundColor: theme.palette.background.default,
        height: "5vh",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6" component="div">
            <Link to="/" style={{ textDecoration: "none", color: theme.palette.text.primary }}>
              Free API List
            </Link>
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            sx={{ marginRight: 5, display: { xs: "none", sm: "flex" } }}
          >
            <Tooltip title="Go to Tools" placement="bottom">
              <IconButton onClick={() => navigate("/tools")} edge="start">
                <BuildIcon sx={{ margin: 1, color: theme.palette.text.primary }} />
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  Tools
                </Typography>
              </IconButton>
            </Tooltip>
            <Tooltip title="View Documentation" placement="bottom">
              <IconButton onClick={() => navigate("/docs")} edge="start">
                <DescriptionIcon sx={{ margin: 1, color: theme.palette.text.primary }} />
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  Docs
                </Typography>
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>
      </Toolbar>
    </Box>
  );
}
