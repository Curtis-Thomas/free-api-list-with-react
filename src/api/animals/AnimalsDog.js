import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../core/main/navigation/NavBar";
import BoxTestCrud from "../../core/main/BoxTestCrud";

const AnimalsDog = () => {
  return (
    <Box>
      <NavBar link="/AnimalsDash" route2="/AnimalsDash" />
      <Box>
        <BoxTestCrud />

        <BoxApiInfo baseEndpoint="https://dog.ceo/api" />
        <Endpoints header="GET" endpoint="/breeds/list/all" description="" />
        <Endpoints header="GET" endpoint="/breed/hound/images" description="" />
        <Endpoints header="GET" endpoint="/breed/hound/list" description="" />

        <Endpoints
          header="GET"
          endpoint="/breeds/image/random"
          description=""
        />
      </Box>
    </Box>
  );
};

export default AnimalsDog;
