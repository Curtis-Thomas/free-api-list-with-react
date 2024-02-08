import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const AnimalsDogApi = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "120vh",
      }}
    >
      {/* Navigation bar */}
      <NavBar link="/AnimalsDash" route2="/DogApi" />

      <ApiPageInfo
        title={"Dog API"}
        linkUrl={"https://dogapi.dog/docs/api-v2"}
        description={
          "Discover a world of furry companionship and information with The Dog API. Dive into a wealth of data on dog breeds, groups, and fascinating facts, all at your fingertips. Seamlessly integrate this treasure trove of knowledge into your website or application using our user-friendly JSON API. Whether you're a dog enthusiast, a developer, or simply curious, The Dog API offers a gateway to enriching your projects with all things canine. Embrace the joy of dogs and enhance your platform with The Dog API today!"
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
