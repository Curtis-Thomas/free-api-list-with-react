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
  const [crudOption, setCrudOption] = useState("get");
  const [urlValue, setUrl] = useState("");
  const [endpointValue, setEndpoint] = useState("");

  const fetchAPI = async () => {
    try {
      if (crudOption && axios[crudOption]) {
        const response = await axios[crudOption](`${urlValue}${endpointValue}`);
        if (response.status === 200) {
          const { data } = response;
          setResponse(data);
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
          sx={{ marginRight: 2, width: "110px" }}
        >
          <MenuItem value="get">GET</MenuItem>
          <MenuItem value="post">POST</MenuItem>
          <MenuItem value="put">PUT</MenuItem>
          <MenuItem value="delete">DELETE</MenuItem>
        </Select>
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
        <Box></Box>
      </Box>

      <Box>
        <Typography variant="h6">Response</Typography>
        <pre
          style={{
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
            background: "#f7f7f7",
            padding: "10px",
            borderRadius: "5px",
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
