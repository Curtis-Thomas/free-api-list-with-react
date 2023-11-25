import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import axios from "axios";

const BoxTestCrud = ({ url }) => {
  const [response, setResponse] = useState("");
  const [crudOption, setCrudOption] = useState("get");
  const [urlValue, setUrl] = useState(url || "");
  const [endpointValue, setEndpoint] = useState("");

  const fetchAPI = async () => {
    try {
      if (crudOption && axios[crudOption]) {
        const response = await axios[crudOption](`${urlValue}${endpointValue}`);
        if (response.status === 200) {
          setResponse(response.data);
        } else {
          setResponse(`Error: ${response.status}`);
        }
      } else {
        setResponse(`Invalid CRUD option: ${crudOption}`);
      }
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
  };

  return (
    <Box
      sx={{
        border: "solid 1px #bbb",
        padding: 2,
        margin: 2,
        borderRadius: 10,
        boxShadow: 1,
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        <DescriptionIcon sx={{ fontSize: 20, marginRight: 1 }} />
        Testing Box
      </Typography>

      <FormControl
        variant="outlined"
        sx={{ marginRight: 2, minWidth: 120, marginBottom: 2 }}
      >
        <InputLabel>CRUD Option</InputLabel>
        <Select
          value={crudOption}
          onChange={(e) => setCrudOption(e.target.value)}
          label="CRUD Option"
        >
          <MenuItem value="get">GET</MenuItem>
          <MenuItem value="post">POST</MenuItem>
          <MenuItem value="put">PUT</MenuItem>
          <MenuItem value="delete">DELETE</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Base URL"
        placeholder="Base URL"
        value={urlValue}
        onChange={(e) => setUrl(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Endpoint"
        placeholder="Endpoint"
        value={endpointValue}
        onChange={(e) => setEndpoint(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={fetchAPI}
        sx={{ marginBottom: 2 }}
      >
        Fetch
      </Button>

      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Response
      </Typography>
      <Box
        component="pre"
        sx={{
          fontFamily: "monospace",
          whiteSpace: "pre-wrap",
          background: "#f7f7f7",
          padding: "10px",
          borderRadius: "5px",
          maxHeight: "60vh",
          overflow: "auto",
          border: "solid 1px #0077ba",
        }}
      >
        {typeof response === "object"
          ? JSON.stringify(response, null, 2)
          : response}
      </Box>
    </Box>
  );
};

export default BoxTestCrud;
