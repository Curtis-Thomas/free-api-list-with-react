import { Link as RouterLink, useParams } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Chip,
  Divider,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { findApi, findCategory } from "../data/catalog.js";
import { NotFoundPage } from "./NotFoundPage.js";
import { CrudTester } from "../components/CrudTester.js";

export function ApiDetailPage() {
  const { categoryId, apiId } = useParams<{ categoryId: string; apiId: string }>();
  const theme = useTheme();

  if (!apiId || !categoryId) return <NotFoundPage />;
  const api = findApi(apiId);
  if (!api || api.category !== categoryId) return <NotFoundPage />;
  const category = findCategory(api.category);

  return (
    <Box>
      <Breadcrumbs sx={{ color: theme.palette.text.secondary, marginBottom: 2 }}>
        <Link component={RouterLink} to="/" underline="hover" sx={{ color: theme.palette.text.secondary }}>
          Home
        </Link>
        {category && (
          <Link
            component={RouterLink}
            to={`/${category.id}`}
            underline="hover"
            sx={{ color: theme.palette.text.secondary }}
          >
            {category.label}
          </Link>
        )}
        <Typography sx={{ color: theme.palette.text.primary }}>{api.name}</Typography>
      </Breadcrumbs>

      <Typography variant="h4" sx={{ color: theme.palette.text.primary }}>
        {api.name}
      </Typography>

      <Stack direction="row" spacing={1} sx={{ marginTop: 1, marginBottom: 2, flexWrap: "wrap" }}>
        <Chip
          size="small"
          label={api.difficulty}
          variant="outlined"
          sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.text.secondary }}
        />
        <Chip
          size="small"
          label={api.pricing}
          variant="outlined"
          sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.text.secondary }}
        />
        <Chip
          size="small"
          label={`auth: ${api.auth.required ? api.auth.type ?? "required" : "none"}`}
          variant="outlined"
          sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.text.secondary }}
        />
        <Chip
          size="small"
          label={`cors: ${api.cors}`}
          variant="outlined"
          sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.text.secondary }}
        />
        {api.tags.map((tag) => (
          <Chip
            key={tag}
            size="small"
            label={tag}
            variant="outlined"
            sx={{ color: theme.palette.text.secondary, borderColor: theme.palette.text.secondary }}
          />
        ))}
      </Stack>

      <Typography variant="body1" sx={{ color: theme.palette.text.secondary, marginBottom: 2 }}>
        {api.description}
      </Typography>

      <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
        <Link href={api.documentationUrl} target="_blank" rel="noopener noreferrer">
          Documentation ↗
        </Link>
        <Link href={api.baseUrl} target="_blank" rel="noopener noreferrer">
          {api.baseUrl} ↗
        </Link>
      </Stack>

      <Divider sx={{ marginY: 2 }} />

      <Typography variant="h6" sx={{ color: theme.palette.text.primary, marginBottom: 1 }}>
        Endpoints
      </Typography>
      <Table size="small" sx={{ marginBottom: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: theme.palette.text.primary }}>Method</TableCell>
            <TableCell sx={{ color: theme.palette.text.primary }}>Path</TableCell>
            <TableCell sx={{ color: theme.palette.text.primary }}>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {api.endpoints.map((endpoint) => (
            <TableRow key={`${endpoint.method} ${endpoint.path}`}>
              <TableCell sx={{ color: theme.palette.text.secondary }}>{endpoint.method}</TableCell>
              <TableCell sx={{ color: theme.palette.text.secondary, fontFamily: "monospace" }}>
                {endpoint.path}
              </TableCell>
              <TableCell sx={{ color: theme.palette.text.secondary }}>{endpoint.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Typography variant="h6" sx={{ color: theme.palette.text.primary, marginBottom: 1 }}>
        Test the API
      </Typography>
      <CrudTester
        baseUrl={api.baseUrl}
        defaultPath={api.endpoints[0]?.path ?? ""}
        defaultUseProxy={api.cors === "no"}
      />
    </Box>
  );
}
