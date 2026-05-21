import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";

interface Contributor {
  id: number;
  login: string;
  html_url: string;
  contributions: number;
  avatar_url: string;
}

export function DocsPage() {
  const theme = useTheme();
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    fetch(
      "https://api.github.com/repos/curtis-thomas/free-api-list-with-react/contributors?per_page=100",
      { signal: controller.signal },
    )
      .then(async (res) => {
        if (!res.ok) throw new Error(`GitHub returned ${res.status} ${res.statusText}`);
        return (await res.json()) as Contributor[];
      })
      .then((data) => {
        setContributors(data.sort((a, b) => b.contributions - a.contributions));
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : String(err));
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  return (
    <Box>
      <Typography variant="h4" sx={{ color: theme.palette.text.primary, marginBottom: 2 }}>
        Documentation
      </Typography>
      <Typography variant="body1" sx={{ color: theme.palette.text.secondary, marginBottom: 2 }}>
        See <code>AGENTS.md</code> and <code>CONTRIBUTING.md</code> in the repository for the canonical
        contribution guides. Below is the list of GitHub contributors to this project.
      </Typography>

      {loading && (
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          Loading contributors…
        </Typography>
      )}
      {error && (
        <Alert severity="warning" sx={{ marginY: 2 }}>
          Could not load contributors: {error}
        </Alert>
      )}

      {!loading && !error && (
        <TableContainer component={Paper} sx={{ backgroundColor: theme.palette.background.default }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: theme.palette.text.primary }}>Contributor</TableCell>
                <TableCell sx={{ color: theme.palette.text.primary }}>Commits</TableCell>
                <TableCell sx={{ color: theme.palette.text.primary }}>Profile</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contributors.map((c) => (
                <TableRow key={c.id}>
                  <TableCell sx={{ color: theme.palette.text.secondary }}>{c.login}</TableCell>
                  <TableCell sx={{ color: theme.palette.text.secondary }}>{c.contributions}</TableCell>
                  <TableCell>
                    <Link href={c.html_url} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
