import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../core/main/navigation/NavBar";
import BoxTestImg from "../../tools/BoxTestImg";

const AnimalsCataas = () => {
  return (
    <Box>
      {/* Navigation bar */}
      <NavBar link="/AnimalsDash" route2="/Cataas" />

      <Box>
        {/* Test image box */}
        <BoxTestImg />

        {/* API information box */}
        <BoxApiInfo baseEndpoint="https://cataas.com/" />

        {/* Endpoints */}
        <Endpoints
          header="GET"
          endpoint="/cat"
          description="Retrieve a random cat"
        />

        <Endpoints
          header="GET"
          endpoint="/cat/:tag"
          description="Retrieve a random cat from a specific tag category"
        />

        <Endpoints
          header="GET"
          endpoint="/cat/gif"
          description="Retrieve a random GIF cat"
        />

        <Endpoints
          header="GET"
          endpoint="/cat/says/:text"
          description="Retrieve a random cat with custom text"
        />

        <Endpoints
          header="GET"
          endpoint="/cat/:tag/says/:text"
          description="Retrieve a random cat from a specific tag category with custom text"
        />

        <Endpoints
          header="GET"
          endpoint="/cat/says/:text?size=:size&color=:color"
          description="Retrieve a custom random cat with text, size, and color parameters"
        />
      </Box>
    </Box>
  );
};

export default AnimalsCataas;
