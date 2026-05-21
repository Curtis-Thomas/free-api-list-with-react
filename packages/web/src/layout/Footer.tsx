import { AppBar, Toolbar, Typography, useTheme } from "@mui/material";

export function Footer() {
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      component="footer"
      elevation={0}
      sx={{
        top: "auto",
        bottom: 0,
        height: "5vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
          Copyright © {new Date().getFullYear()} Free API List Contributors
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
