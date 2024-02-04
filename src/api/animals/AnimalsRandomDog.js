import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const AnimalsRandomDog = () => {
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
      <NavBar link="/AnimalsDash" route2="/RandomDog" />

      <ApiPageInfo
        title={"Random Dog"}
        linkUrl={"https://random.dog/"}
        description={
          "A simple api that returns a random fact about cats on a GET request"
        }
      />

      {/* CRUD test box */}
      <BoxTestCrud />

      <Box>
        {/* API information box */}
        <BoxApiInfo baseEndpoint="https://random.dog" />

        {/* Endpoints */}
        <Endpoints
          header="GET"
          endpoint="/woof.json"
          description="Retrieve a random dog picture url"
        />
      </Box>
    </Box>
  );
};

export default AnimalsRandomDog;
