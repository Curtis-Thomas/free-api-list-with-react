import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../core/main/navigation/NavBar";
import BoxTestImg from "../../tools/BoxTestImg";

const AnimalsCataas = () => {
  return (
    <Box>
      <NavBar link="/AnimalsDash" route2="/Cataas" />
      <Box>
        <BoxTestImg />
        <BoxApiInfo baseEndpoint="https://cataas.com/" />
        <Endpoints header="GET" endpoint="/cat" description="Random Cat" />
        <Endpoints
          header="GET"
          endpoint="/cat/:tag"
          description="Random cat from tag category"
        />
        <Endpoints
          header="GET"
          endpoint="/cat/gif"
          description="Random Gif Cat"
        />
        <Endpoints
          header="GET"
          endpoint="/cat/says/:text"
          description="Random Cat with Text"
        />
        <Endpoints
          header="GET"
          endpoint="/cat/:tag/says/:text"
          description="Random cat from cetegory with text"
        />
        <Endpoints
          header="GET"
          endpoint="/cat/says/:text?size=:size&color=:color"
          description="Custom random cat with text"
        />
      </Box>
    </Box>
  );
};

export default AnimalsCataas;
