import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const BooksABibliaDigital = () => {
  return (
    <Box>
      <NavBar link="/BooksDash" route2="/ABibliaDigital" />
      <ApiPageInfo
        title={"A Biblia Digital."}
        linkUrl={
          "https://github.com/omarciovsena/abibliadigital/blob/master/DOCUMENTATION.md"
        }
        description={
          "RESTful Bible API with 7 versions, 4 languages and multiple features to simplify your day to day."
        }
      />
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
