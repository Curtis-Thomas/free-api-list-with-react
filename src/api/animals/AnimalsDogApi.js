import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../core/main/navigation/NavBar";
import BoxTestCrud from "../../core/main/BoxTestCrud";

const AnimalsDogApi = () => {
  return (
    <Box>
      <NavBar link="/AnimalsDash" route2="/AnimalsDash" />
      <Box>
        <BoxTestCrud />
        <BoxApiInfo baseEndpoint="https://dogapi.dog/api/v2" />
        <Endpoints header="GET" endpoint="/breeds" description="" />
        <Endpoints header="GET" endpoint="/breeds/{id}" description="" />
        <Endpoints header="GET" endpoint="/facts" description="" />
        <Endpoints header="GET" endpoint="/groups" description="" />
        <Endpoints header="GET" endpoint="/groups/{id}" description="" />
      </Box>
    </Box>
  );
};

export default AnimalsDogApi;
