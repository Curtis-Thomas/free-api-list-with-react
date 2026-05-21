import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { callApi, tryFormatJson } from "../lib/fetch-api.js";
import type { HttpMethod } from "@free-api-list/catalog";

const METHODS: HttpMethod[] = ["GET", "POST", "PUT", "PATCH", "DELETE"];

interface CrudTesterProps {
  baseUrl?: string;
  defaultPath?: string;
  defaultUseProxy?: boolean;
}

export function CrudTester({
  baseUrl = "",
  defaultPath = "",
  defaultUseProxy = false,
}: CrudTesterProps) {
  const theme = useTheme();
  const [base, setBase] = useState(baseUrl);
  const [path, setPath] = useState(defaultPath);
  const [method, setMethod] = useState<HttpMethod>("GET");
  const [body, setBody] = useState("");
  const [useProxy, setUseProxy] = useState(defaultUseProxy);
  const [response, setResponse] = useState<string>("");
  const [meta, setMeta] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onFetch = async () => {
    setLoading(true);
    setError(null);
    setResponse("");
    setMeta("");
    try {
      const url = `${base}${path}`;
      const result = await callApi(
        method === "GET"
          ? { method, url, useProxy }
          : { method, url, body, useProxy },
      );
      setMeta(
        `${result.status} ${result.statusText} · ${result.contentType ?? "no content-type"} · ${result.durationMs}ms`,
      );
      setResponse(tryFormatJson(result.body));
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.text.primary}`,
        padding: 2,
        margin: 2,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Testing Box
      </Typography>

      <FormControl variant="outlined" sx={{ marginRight: 2, minWidth: 120, marginBottom: 2 }}>
        <InputLabel id="crud-method-label">Method</InputLabel>
        <Select
          labelId="crud-method-label"
          value={method}
          label="Method"
          onChange={(e) => setMethod(e.target.value as HttpMethod)}
        >
          {METHODS.map((m) => (
            <MenuItem key={m} value={m}>
              {m}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControlLabel
        control={<Switch checked={useProxy} onChange={(e) => setUseProxy(e.target.checked)} />}
        label="Route through CORS proxy"
        sx={{ marginLeft: 1 }}
      />

      <TextField
        label="Base URL"
        value={base}
        onChange={(e) => setBase(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Endpoint"
        value={path}
        onChange={(e) => setPath(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />

      {method !== "GET" && (
        <TextField
          label="Body (JSON)"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          variant="outlined"
          fullWidth
          multiline
          minRows={4}
          sx={{ marginBottom: 2 }}
        />
      )}

      <Button
        variant="outlined"
        onClick={onFetch}
        disabled={loading}
        sx={{ marginBottom: 2 }}
      >
        {loading ? "Fetching…" : "Fetch"}
      </Button>

      {meta && (
        <Typography variant="caption" sx={{ display: "block", color: theme.palette.text.secondary }}>
          {meta}
        </Typography>
      )}

      {error && (
        <Alert severity="error" sx={{ marginY: 1 }}>
          {error}
        </Alert>
      )}

      <Typography variant="h6" sx={{ marginBottom: 1, marginTop: 2 }}>
        Response
      </Typography>
      <Box
        component="pre"
        sx={{
          fontFamily: "monospace",
          whiteSpace: "pre-wrap",
          background: theme.palette.background.default,
          padding: "10px",
          borderRadius: "5px",
          maxHeight: "60vh",
          overflow: "auto",
          border: `1px solid ${theme.palette.text.primary}`,
          color: theme.palette.text.secondary,
        }}
      >
        {response || "(no response yet)"}
      </Box>
    </Box>
  );
}
