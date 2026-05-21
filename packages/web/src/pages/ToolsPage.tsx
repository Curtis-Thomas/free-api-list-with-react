import { Box, Typography, useTheme } from "@mui/material";
import { CrudTester } from "../components/CrudTester.js";
import { ImgTester } from "../components/ImgTester.js";

export function ToolsPage() {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h4" sx={{ color: theme.palette.text.primary, marginBottom: 2 }}>
        Tools
      </Typography>
      <Typography variant="body1" sx={{ color: theme.palette.text.secondary, marginBottom: 3 }}>
        Standalone CRUD and image testers. Point them at any URL — no API entry required.
      </Typography>

      <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
        CRUD Testing
      </Typography>
      <CrudTester />

      <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
        Image Testing
      </Typography>
      <ImgTester />
    </Box>
  );
}
