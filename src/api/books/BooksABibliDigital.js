import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";

const BooksABibliaDigital = () => {
  return (
    <Box>
      <NavBar link="/BooksDash" route2="/ABibliaDigital" />
      <Box />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://www.abibliadigital.com.br/api" />
        <Endpoints header="GET" endpoint="/books" />
        <Endpoints header="GET" endpoint="/verses/:version/:abbrev/:chapter" />
        <Endpoints
          header="GET"
          endpoint="/verses/:version/:abbrev/:chapter/:number
"
        />
        <Endpoints header="GET" endpoint="/verses/:version/random" />
        <Endpoints header="GET" endpoint="/verses/:version/:abbrev/random" />
        <Endpoints header="POST" endpoint="/api/verses/search" />
        <Endpoints header="GET" endpoint="/versions" />
      </Box>
    </Box>
  );
};

export default BooksABibliaDigital;
