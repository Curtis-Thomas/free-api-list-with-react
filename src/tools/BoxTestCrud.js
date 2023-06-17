import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Input,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";

const BoxTestCrud = ({ url }) => {
  // State variables for response, CRUD option, URL, and endpoint
  const [response, setResponse] = useState("");
  const [crudOption, setCrudOption] = useState("get");
  const [urlValue, setUrl] = useState("");
  const [endpointValue, setEndpoint] = useState("");

  // Function to fetch API data
  const fetchAPI = async () => {
    try {
      // Check if the selected CRUD option is valid
      if (crudOption && axios[crudOption]) {
        // Send API request based on the selected CRUD option
        const response = await axios[crudOption](`${urlValue}${endpointValue}`);
        if (response.status === 200) {
          const { data } = response;
          // Update response state with the received data
          setResponse(data);
        } else {
          const errorMessage = `Error: ${response.status}`;
          // Update response state with the error message
          setResponse(errorMessage);
          console.log(errorMessage);
        }
      } else {
        const errorMessage = `Invalid CRUD option: ${crudOption}`;
        // Update response state with the error message
        setResponse(errorMessage);
        console.log(errorMessage);
      }
    } catch (error) {
      const errorMessage = `Error: ${error.message}`;
      // Update response state with the error message
      setResponse(errorMessage);
      console.log(errorMessage);
    }
  };

  // Event handler for CRUD option change
  const handleCrudOptionChange = (event) => {
    // Update the selected CRUD option
    setCrudOption(event.target.value);
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
        <Typography variant="h6">Testing Box</Typography>
        {/* Select dropdown for CRUD option */}
        <Select
          value={crudOption}
          onChange={handleCrudOptionChange}
          label="CRUD Option"
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
            onChange={(e) => setUrl(e.target.value)}
            sx={{ marginRight: 2, width: "100%" }}
          />
        </Box>
        {/* Input field for the endpoint */}
        <Box sx={{ minHeight: "10vh", display: "flex", alignItems: "center" }}>
          <Input
            label="Endpoint"
            placeholder="Endpoint"
            value={endpointValue}
            onChange={(e) => setEndpoint(e.target.value)}
            sx={{ marginRight: 2, width: "100%" }}
          />
        </Box>
        {/* Button to trigger the API request */}
        <Box>
          <Button onClick={fetchAPI}>Fetch</Button>
        </Box>
        <Box></Box>
      </Box>

      <Box>
        {/* Display the API response */}
        <Typography variant="h6">Response</Typography>
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

export default BoxTestCrud;
