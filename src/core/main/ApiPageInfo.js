import { Box, Link, Typography } from "@mui/material";

function ApiPageInfo({ title, linkName, linkUrl, description }) {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      <Typography gutterBottom>
        {" "}
        API Info Page:
        <Link
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ marginLeft: 1 }}
        >
          {linkUrl}
        </Link>
      </Typography>

      <Typography variant="body1">{description}</Typography>
    </Box>
  );
}

export default ApiPageInfo;
