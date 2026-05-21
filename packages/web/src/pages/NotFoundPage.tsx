import { Box, Link, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export function NotFoundPage() {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h4" sx={{ color: theme.palette.text.primary, marginBottom: 1 }}>
        Not found
      </Typography>
      <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
        The page you requested does not exist.{" "}
        <Link component={RouterLink} to="/">
          Go home
        </Link>
        .
      </Typography>
    </Box>
  );
}
