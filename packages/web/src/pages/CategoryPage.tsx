import { Box, Breadcrumbs, Grid, Link, Typography, useTheme } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import { ApiCard } from "../components/ApiCard.js";
import { apisInCategory, findCategory } from "../data/catalog.js";
import { NotFoundPage } from "./NotFoundPage.js";

export function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const theme = useTheme();

  if (!categoryId) return <NotFoundPage />;
  const category = findCategory(categoryId);
  if (!category) return <NotFoundPage />;

  const apis = apisInCategory(categoryId);

  return (
    <Box>
      <Breadcrumbs sx={{ color: theme.palette.text.secondary, marginBottom: 2 }}>
        <Link
          component={RouterLink}
          to="/"
          underline="hover"
          sx={{ color: theme.palette.text.secondary }}
        >
          Home
        </Link>
        <Typography sx={{ color: theme.palette.text.primary }}>{category.label}</Typography>
      </Breadcrumbs>

      <Typography variant="h4" sx={{ color: theme.palette.text.primary, marginBottom: 2 }}>
        {category.label}
      </Typography>

      {apis.length === 0 ? (
        <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
          No APIs catalogued in this category yet. See{" "}
          <Link component={RouterLink} to="/">
            how to contribute
          </Link>
          .
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {apis.map((api) => (
            <Grid key={api.id} size={{ xs: 12, sm: 6 }}>
              <ApiCard api={api} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
