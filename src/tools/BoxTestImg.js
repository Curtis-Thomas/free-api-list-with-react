import React, { useState } from "react";
import { Box, Typography, Button, Input } from "@mui/material";
import axios from "axios";

/**
 * Component for testing image fetching from an API endpoint.
 *
 * @param {string} url - The base URL of the API.
 */
const BoxTestImg = ({ url }) => {
  const [response, setResponse] = useState("");
  const [urlValue, setUrl] = useState("");
  const [endpointValue, setEndpoint] = useState("");

  /**
   * Fetches the image from the API endpoint and sets the response state accordingly.
   */
  const fetchAPI = async () => {
    try {
      const response = await axios.get(`${urlValue}${endpointValue}`, {
        responseType: "blob",
      });
      if (response.status === 200) {
        const reader = new FileReader();
        reader.onload = () => {
          setResponse(reader.result);
        };
        reader.readAsDataURL(response.data);
      } else {
        const errorMessage = `Error: ${response.status}`;
        setResponse(errorMessage);
        console.log(errorMessage);
      }
    } catch (error) {
      const errorMessage = `Error: ${error.message}`;
      setResponse(errorMessage);
      console.log(errorMessage);
    }
  };

  return (
    <Box
      sx={{
        border: "solid 1px purple",
        padding: 2,
        margin: 2,
        minHeight: "20vh",
      }}
    >
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6">IMG Testing Box</Typography>
        <Box sx={{ minHeight: "10vh", display: "flex", alignItems: "center" }}>
          <Input
            label="Base URL"
            placeholder="Base URL"
            value={urlValue}
            onChange={(e) => setUrl(e.target.value)}
            sx={{ marginRight: 2, width: "100%" }}
          />
        </Box>
        <Box sx={{ minHeight: "10vh", display: "flex", alignItems: "center" }}>
          <Input
            label="Endpoint"
            placeholder="Endpoint"
            value={endpointValue}
            onChange={(e) => setEndpoint(e.target.value)}
            sx={{ marginRight: 2, width: "100%" }}
          />
        </Box>
        <Box>
          <Button variant="contained" onClick={fetchAPI}>
            Fetch
          </Button>
        </Box>
      </Box>

      {response && (
        <Box>
          <Typography variant="h6">Response</Typography>
          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%", // 16:9 aspect ratio (divide height by width)
            }}
          >
            <img
              src={response}
              alt="Response"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default BoxTestImg;
