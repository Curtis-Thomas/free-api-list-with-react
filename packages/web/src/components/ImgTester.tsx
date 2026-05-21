import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useState } from "react";

export function ImgTester({ defaultUrl = "" }: { defaultUrl?: string }) {
  const theme = useTheme();
  const [url, setUrl] = useState(defaultUrl);
  const [shown, setShown] = useState("");
  const [error, setError] = useState<string | null>(null);

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
        Image Testing Box
      </Typography>

      <TextField
        label="Image URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />

      <Button
        variant="outlined"
        onClick={() => {
          setError(null);
          setShown(url);
        }}
        sx={{ marginBottom: 2 }}
      >
        Load
      </Button>

      {shown && !error && (
        <Box
          component="img"
          src={shown}
          alt="API response"
          onError={() => setError(`Failed to load ${shown}`)}
          sx={{ maxWidth: "100%", border: `1px solid ${theme.palette.text.primary}` }}
        />
      )}
      {error && (
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          {error}
        </Typography>
      )}
    </Box>
  );
}
