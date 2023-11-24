import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const AnimalsDog = () => {
  return (
    <Box>
      {/* Navigation bar */}
      <NavBar link="/AnimalsDash" route2="/Dog" />

      <ApiPageInfo
        title={"Dog"}
        linkUrl={"https://dog.ceo/dog-api/"}
        description={
          "The internet's biggest collection of open source dog pictures."
        }
      />

      {/* CRUD test box */}
      <BoxTestCrud />

      <Box>
        {/* API information box */}
        <BoxApiInfo baseEndpoint="https://dog.ceo/api" />

        {/* Endpoints */}
        <Endpoints
          header="GET"
          endpoint="/breeds/list/all"
          description="Retrieve a list of all dog breeds"
        />
        <Endpoints
          header="GET"
          endpoint="/breed/hound/images"
          description="Retrieve images of hound dogs"
        />
        <Endpoints
          header="GET"
          endpoint="/breed/hound/list"
          description="Retrieve a list of hound dog sub-breeds"
        />
        <Endpoints
          header="GET"
          endpoint="/breeds/image/random"
          description="Retrieve a random dog image"
        />
      </Box>
    </Box>
  );
};

export default AnimalsDog;
