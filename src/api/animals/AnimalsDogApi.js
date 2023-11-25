import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const AnimalsDogApi = () => {
  return (
    <Box>
      {/* Navigation bar */}
      <NavBar link="/AnimalsDash" route2="/DogApi" />

      <ApiPageInfo
        title={"Dog API"}
        linkUrl={"https://dogapi.dog/docs/api-v2"}
        description={
          "The Dog API provides a wealth of information on dog breeds, groups, and fun facts. Access and integrate this data into your website or application with our easy-to-use JSON API."
        }
      />

      {/* CRUD test box */}
      <BoxTestCrud />

      <Box>
        {/* API information box */}
        <BoxApiInfo baseEndpoint="https://dogapi.dog/api/v2" />

        {/* Endpoints */}
        <Endpoints
          header="GET"
          endpoint="/breeds"
          description="Retrieve a list of dog breeds"
        />
        <Endpoints
          header="GET"
          endpoint="/breeds/{id}"
          description="Retrieve details of a specific dog breed"
        />
        <Endpoints
          header="GET"
          endpoint="/facts"
          description="Retrieve dog facts"
        />
        <Endpoints
          header="GET"
          endpoint="/groups"
          description="Retrieve a list of dog groups"
        />
        <Endpoints
          header="GET"
          endpoint="/groups/{id}"
          description="Retrieve details of a specific dog group"
        />
      </Box>
    </Box>
  );
};

export default AnimalsDogApi;
