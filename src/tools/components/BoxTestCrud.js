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
  useTheme,
} from "@mui/material";
import axios from "axios";

const BoxTestCrud = ({ url }) => {
  const theme = useTheme();

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
        border: "solid 1px ",
        padding: 2,
        margin: 2,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
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
        variant="outlined"
        onClick={fetchAPI}
        sx={{
          marginBottom: 2,
          backgroundColor: theme.palette.background.default,
          borderColor: theme.palette.text.primary,
          color: theme.palette.text.secondary,
          "&:hover": {
            borderColor: theme.palette.text.secondary,
            opacity: 0.8,
            border: "1px dashed",
          },
        }}
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
          background: theme.palette.background.default,
          padding: "10px",
          borderRadius: "5px",
          maxHeight: "60vh",
          overflow: "auto",
          border: "solid 1px #0077ba",
          color: theme.palette.text.secondary,
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
