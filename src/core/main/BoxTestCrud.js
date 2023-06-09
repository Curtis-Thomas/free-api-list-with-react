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
  const [response, setResponse] = useState("");
  const [crudOption, setCrudOption] = useState("");
  const [urlValue, setUrl] = useState("");
  const [endpointValue, setEndpoint] = useState("");

  const fetchAPI = async () => {
    try {
      if (crudOption && axios[crudOption]) {
        const response = await axios[crudOption](`${urlValue}${endpointValue}`);
        if (response.status === 200) {
          const { data } = response;
          setResponse(data.text);
        } else {
          const errorMessage = `Error: ${response.status}`;
          setResponse(errorMessage);
          console.log(errorMessage);
        }
      } else {
        const errorMessage = `Invalid CRUD option: ${crudOption}`;
        setResponse(errorMessage);
        console.log(errorMessage);
      }
    } catch (error) {
      const errorMessage = `Error: ${error.message}`;
      setResponse(errorMessage);
      console.log(errorMessage);
    }
  };

  const handleCrudOptionChange = (event) => {
    setCrudOption(event.target.value);
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
        <Typography variant="h6">Testing Box</Typography>
        <Select
          value={crudOption}
          onChange={handleCrudOptionChange}
          label="CRUD Option"
          sx={{ marginRight: 2, width: "110px" }} // Set a minWidth for the dropdown
        >
          <MenuItem value="get">GET</MenuItem>
          <MenuItem value="post">POST</MenuItem>
          <MenuItem value="put">PUT</MenuItem>
          <MenuItem value="delete">DELETE</MenuItem>
        </Select>
        <Input
          label="Base URL"
          placeholder="Base URL"
          value={urlValue}
          onChange={(e) => setUrl(e.target.value)}
          sx={{ marginRight: 2, width: "300px" }}
        />
        <Input
          label="Endpoint"
          placeholder="Endpoint"
          value={endpointValue}
          onChange={(e) => setEndpoint(e.target.value)}
          sx={{ marginRight: 2, width: "300px" }}
        />
        <Button variant="contained" onClick={fetchAPI}>
          Fetch
        </Button>
      </Box>

      <Box>
        <Typography variant="h6">Response</Typography>
        <Typography>{response}</Typography>
      </Box>
    </Box>
  );
};

export default BoxTestCrud;
