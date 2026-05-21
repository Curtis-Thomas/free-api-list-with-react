import { Link as RouterLink } from "react-router-dom";
import { Card, CardActionArea, CardContent, Chip, Stack, Typography, useTheme } from "@mui/material";
import type { ApiEntry } from "@free-api-list/catalog";

export function ApiCard({ api }: { api: ApiEntry }) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        height: "100%",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.text.primary}`,
      }}
    >
      <CardActionArea
        component={RouterLink}
        to={`/${api.category}/${api.id}`}
        sx={{ height: "100%", padding: 0 }}
      >
        <CardContent>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ marginBottom: 1 }}>
            <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
              {api.name}
            </Typography>
            <Chip
              size="small"
              label={api.difficulty}
              sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.text.secondary }}
              variant="outlined"
            />
            {api.auth.required && (
              <Chip
                size="small"
                label="auth required"
                variant="outlined"
                sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.text.secondary }}
              />
            )}
          </Stack>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            {api.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
