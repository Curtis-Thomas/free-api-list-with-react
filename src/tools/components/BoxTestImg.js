import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Snackbar,
} from "@mui/material";
import axios from "axios";

const BoxTestImg = ({ url }) => {
  const [response, setResponse] = useState("");
  const [urlValue, setUrl] = useState("");
  const [endpointValue, setEndpoint] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAPI = async () => {
    setLoading(true);
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
        setError(`Error: ${response.status}`);
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <Box
      sx={{
        border: "solid 1px #bbb",
        padding: 2,
        margin: 2,
        minHeight: "20vh",
      }}
    >
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6">IMG Testing Box</Typography>
        <TextField
          label="Base URL"
          placeholder="Base URL"
          value={urlValue}
          onChange={(e) => setUrl(e.target.value)}
          sx={{ marginRight: 2, width: "100%" }}
        />
        <TextField
          label="Endpoint"
          placeholder="Endpoint"
          value={endpointValue}
          onChange={(e) => setEndpoint(e.target.value)}
          sx={{ marginRight: 2, width: "100%" }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ "&:hover": { backgroundColor: "#0077ba" } }}
          onClick={fetchAPI}
        >
          Fetch
        </Button>
      </Box>

      {loading && <Typography variant="body2">Loading...</Typography>}

      {error && (
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={handleCloseError}
          message={error}
        />
      )}

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
              alt="Fetched Response"
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
