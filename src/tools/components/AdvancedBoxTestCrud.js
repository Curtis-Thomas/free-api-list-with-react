import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Input,
  Select,
  MenuItem,
  useTheme,
} from "@mui/material";
import axios from "axios";

const AdvancedBoxTestCrud = ({ url }) => {
  const theme = useTheme();

  // State variables for response, CRUD option, URL, endpoint, headers, and body
  const [response, setResponse] = useState("");
  const [crudOption, setCrudOption] = useState("get");
  const [urlValue, setUrl] = useState("");
  const [endpointValue, setEndpoint] = useState("");
  const [headers, setHeaders] = useState("");
  const [body, setBody] = useState("");

  // Function to fetch API data
  const fetchAPI = async () => {
    try {
      // Check if the selected CRUD option is valid
      if (crudOption) {
        // Create an options object for the axios request
        let options = { method: crudOption }; // HTTP method (get, post, put, delete)

        if (urlValue) {
          options["url"] = urlValue + endpointValue;
        } // URL to send the request

        if (headers) {
          options["headers"] = JSON.parse(headers);
        } // Parsed headers in JSON format

        if (body) {
          options["data"] = body;
        } // Request body (if applicable)

        // Send the API request using axios
        const response = await axios(options);

        // Set the response data
        setResponse(response.data);
      } else {
        const errorMessage = `Invalid CRUD option: ${crudOption}`;
        // Update response state with the error message
        setResponse(errorMessage);
        console.log(errorMessage);
      }
    } catch (error) {
      // Handle any errors that occur during the request
      setResponse(`Error: ${error.message}`);
      console.log(`Error: ${error.message}`);
    }
  };

  // Event handler for input value change
  const handleInputChange = (event, stateSetter) => {
    // Update the corresponding state value
    stateSetter(event.target.value);
  };

  return (
    <Box
      sx={{
        border: "solid 1px",
        padding: 2,
        margin: 2,
        minHeight: "20vh",
        color: theme.palette.text.primary,
      }}
    >
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h6">Advanced Testing Box</Typography>
        {/* Select the HTTP method */}
        <Select
          value={crudOption}
          onChange={(event) => handleInputChange(event, setCrudOption)}
          label="CRUD Option"
          name="crudOption"
          sx={{ marginRight: 2, width: "110px" }}
        >
          {/* Options for CRUD operations */}
          <MenuItem value="get">GET</MenuItem>
          <MenuItem value="post">POST</MenuItem>
          <MenuItem value="put">PUT</MenuItem>
          <MenuItem value="delete">DELETE</MenuItem>
        </Select>
        {/* Input field for the base URL */}
        <Box sx={{ minHeight: "10vh", display: "flex", alignItems: "center" }}>
          <Input
            label="Base URL"
            placeholder="Base URL"
            value={urlValue}
            onChange={(event) => handleInputChange(event, setUrl)}
            sx={{ marginBottom: 2, width: "100%" }}
          />
        </Box>
        {/* Input field for the endpoint */}
        <Box sx={{ minHeight: "10vh", display: "flex", alignItems: "center" }}>
          <Input
            label="Endpoint"
            placeholder="Endpoint"
            value={endpointValue}
            onChange={(event) => handleInputChange(event, setEndpoint)}
            sx={{ marginBottom: 2, width: "100%" }}
          />
        </Box>
        {/* Text field for specifying headers */}
        <Box sx={{ minHeight: "10vh", display: "flex", alignItems: "center" }}>
          <Input
            label="Headers"
            placeholder="Headers (JSON format)"
            multiline
            value={headers}
            onChange={(event) => handleInputChange(event, setHeaders)}
            sx={{ marginBottom: 2, width: "100%" }}
          />
        </Box>
        {/* Text field for specifying the request body */}
        <Box sx={{ minHeight: "10vh", display: "flex", alignItems: "center" }}>
          <Input
            label="Body"
            placeholder="Request body (if applicable)"
            multiline
            value={body}
            onChange={(event) => handleInputChange(event, setBody)}
            sx={{ marginBottom: 2, width: "100%" }}
          />
        </Box>
        {/* Button to send the API request */}
        <Button
          sx={{ "&:hover": { backgroundColor: "inherit" } }}
          variant="contained"
          onClick={fetchAPI}
        >
          Send Request
        </Button>
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
