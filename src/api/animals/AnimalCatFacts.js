import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const AnimalCatFacts = () => {
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
      <NavBar link="/AnimalsDash" route2="/CatFacts" />
      <ApiPageInfo
        title={"Daily Cat Facts"}
        linkUrl={"https://catfact.ninja/docs/api-docs.json"}
        description={"Daily cat facts"}
      />

      {/* CRUD test box */}
      <BoxTestCrud />

      <Box>
        {/* API information box */}
        <BoxApiInfo baseEndpoint="https://catfact.ninja/" />

        {/* Endpoint */}
        <Endpoints
          header="GET"
          endpoint="fact"
          description="Retrieve a random cat fact"
        />
      </Box>
    </Box>
  );
};

export default AnimalCatFacts;
