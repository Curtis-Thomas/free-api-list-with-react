import { Box, Link, Typography, useTheme } from "@mui/material";

function ApiPageInfo({ title, linkName, linkUrl, description }) {
  const theme = useTheme();

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      <Typography gutterBottom sx={{ color: theme.palette.text.secondary }}>
        {" "}
        API Info Page:
        <Link
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ marginLeft: 1 }}
          color={theme.palette.text.primary}
        >
          {linkUrl}
        </Link>
      </Typography>

      <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
        {description}
      </Typography>
    </Box>
  );
}

export default ApiPageInfo;
