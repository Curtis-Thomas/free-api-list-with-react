import React from "react";
import { Box, Typography, Link } from "@mui/material";

const ContributorsContent = () => {
  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Contributors List
      </Typography>
      <Box sx={{ paddingLeft: 2 }}>
        <Typography paragraph>
          Curtis Thomas - June 10th, 2023{" "}
          <Link
            href="https://github.com/Curtis-Thomas"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </Typography>
        <Typography paragraph>
          Prashant Chawla - June 11th, 2023{" "}
          <Link
            href="https://github.com/pchawlaji"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </Typography>
        <Typography paragraph>
          Jibran Absarulislam - June 12th, 2023{" "}
          <Link
            href="https://github.com/jibranabsarulislam"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </Typography>
        <Typography paragraph>
          Godwin Agbleze - June 12th, 2023{" "}
          <Link
            href="https://github.com/godwin-17"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </Typography>
        <Typography paragraph>
          Sneha Chitre - June 16th, 2023{" "}
          <Link
            href="https://github.com/snehachitre-apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </Typography>
        {/* Template for new contributors, commented out */}
        {/* <Typography paragraph>
          ###<Link href="#">###</Link>###
        </Typography> */}
      </Box>
    </Box>
  );
};

export default ContributorsContent;
