import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Chip,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { APIS, categoriesWithApis } from "../data/catalog.js";
import { ApiCard } from "../components/ApiCard.js";
import type { Difficulty } from "@free-api-list/catalog";

const DIFFICULTIES: Array<Difficulty | "all"> = ["all", "beginner", "intermediate", "advanced"];

export function HomePage() {
  const theme = useTheme();
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return APIS.filter((api) => {
      if (difficulty !== "all" && api.difficulty !== difficulty) return false;
      if (categoryFilter !== "all" && api.category !== categoryFilter) return false;
      if (q.length === 0) return true;
      return (
        api.name.toLowerCase().includes(q) ||
        api.description.toLowerCase().includes(q) ||
        api.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [search, difficulty, categoryFilter]);

  const categories = categoriesWithApis();

  return (
    <Box>
      <Typography variant="h4" sx={{ color: theme.palette.text.primary, marginBottom: 1 }}>
        Free API List
      </Typography>
      <Typography variant="body1" sx={{ color: theme.palette.text.secondary, marginBottom: 3 }}>
        A community-maintained catalog of free public APIs with an in-browser test harness.
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ marginBottom: 3 }}>
        <TextField
          label="Search APIs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          sx={{ minWidth: 220 }}
        />
        <TextField
          label="Difficulty"
          select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as Difficulty | "all")}
          size="small"
          sx={{ minWidth: 160 }}
        >
          {DIFFICULTIES.map((d) => (
            <MenuItem key={d} value={d}>
              {d}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Category"
          select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          size="small"
          sx={{ minWidth: 200 }}
        >
          <MenuItem value="all">all</MenuItem>
          {categories.map(({ category }) => (
            <MenuItem key={category.id} value={category.id}>
              {category.label}
            </MenuItem>
          ))}
        </TextField>
      </Stack>

      <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", marginBottom: 2 }}>
        {categories.map(({ category, count }) => (
          <Chip
            key={category.id}
            label={`${category.label} (${count})`}
            component={RouterLink}
            to={`/${category.id}`}
            clickable
            variant="outlined"
            sx={{ color: theme.palette.text.primary, borderColor: theme.palette.text.primary, mb: 1 }}
          />
        ))}
      </Stack>

      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
        Showing {filtered.length} of {APIS.length} APIs
      </Typography>

      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        {filtered.map((api) => (
          <Grid key={api.id} size={{ xs: 12, sm: 6 }}>
            <ApiCard api={api} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
