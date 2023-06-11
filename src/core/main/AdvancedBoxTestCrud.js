import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Input,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import axios from "axios";

const AdvancedBoxTestCrud = ({ url }) => {
  const [response, setResponse] = useState("");
  const [method, setMethod] = useState("get");
  const [urlValue, setUrl] = useState("");
  const [headers, setHeaders] = useState("");
  const [body, setBody] = useState("");

  const fetchAPI = async () => {
    try {
      // Create an options object for the axios request
      const options = {
        method, // HTTP method (get, post, put, delete)
        url: urlValue, // URL to send the request
        headers: JSON.parse(headers), // Parsed headers in JSON format
        data: body, // Request body (if applicable)
      };

      // Send the API request using axios
      const response = await axios(options);

      // Set the response data
      setResponse(response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      setResponse(`Error: ${error.message}`);
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <Box
      sx={{
        border: "solid 1px #0077ba",
        padding: 2,
        margin: 2,
        minHeight: "20vh",
      }}
    >
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6">Advanced Box</Typography>
        {/* Select the HTTP method */}
        <Select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          label="HTTP Method"
          sx={{ marginRight: 2, width: "110px" }}
        >
          <MenuItem value="get">GET</MenuItem>
          <MenuItem value="post">POST</MenuItem>
          <MenuItem value="put">PUT</MenuItem>
          <MenuItem value="delete">DELETE</MenuItem>
        </Select>
        {/* Input field for specifying the URL */}
        <Box sx={{ minHeight: "10vh", display: "flex", alignItems: "center" }}>
          <Input
            label="URL"
            placeholder="URL"
            value={urlValue}
            onChange={(e) => setUrl(e.target.value)}
            sx={{ marginRight: 2, width: "100%" }}
          />
        </Box>
        {/* Text field for specifying headers */}
        <TextField
          label="Headers"
          placeholder="Headers (JSON format)"
          multiline
          value={headers}
          onChange={(e) => setHeaders(e.target.value)}
          sx={{ marginBottom: 2, width: "100%" }}
        />
        {/* Text field for specifying the request body */}
        <TextField
          label="Body"
          placeholder="Request body (if applicable)"
          multiline
          value={body}
          onChange={(e) => setBody(e.target.value)}
          sx={{ marginBottom: 2, width: "100%" }}
        />
        {/* Button to send the API request */}
        <Box>
          <Button
            variant="contained"
            onClick={fetchAPI}
            style={{ backgroundColor: "#0077ba" }}
          >
            Send Request
          </Button>
        </Box>
      </Box>

      <Box>
        <Typography variant="h6">Response</Typography>
        {/* Display the API response */}
        <pre
          style={{
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
            background: "#f7f7f7",
            padding: "10px",
            borderRadius: "5px",
            maxHeight: "60vh",
            overflow: "auto",
            border: "solid 1px ##0077ba",
          }}
        >
          {typeof response === "object"
            ? JSON.stringify(response, null, 2)
            : response}
        </pre>
      </Box>
    </Box>
  );
};

export default AdvancedBoxTestCrud;
