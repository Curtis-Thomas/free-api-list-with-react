import { Link as RouterLink } from "react-router-dom";
import { Box, List, ListItemButton, ListItemText, Typography, useTheme } from "@mui/material";
import { categoriesWithApis } from "../data/catalog.js";

export function BarLeft() {
  const theme = useTheme();
  const entries = categoriesWithApis();

  return (
    <Box sx={{ padding: 2, color: theme.palette.text.primary }}>
      <Typography variant="overline" sx={{ color: theme.palette.text.primary }}>
        Categories
      </Typography>
      <List dense disablePadding>
        {entries.map(({ category, count }) => (
          <ListItemButton
            key={category.id}
            component={RouterLink}
            to={`/${category.id}`}
            sx={{ color: theme.palette.text.primary }}
          >
            <ListItemText
              primary={category.label}
              secondary={`${count} ${count === 1 ? "API" : "APIs"}`}
              slotProps={{
                primary: { sx: { color: theme.palette.text.primary } },
                secondary: { sx: { color: theme.palette.text.secondary } },
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
