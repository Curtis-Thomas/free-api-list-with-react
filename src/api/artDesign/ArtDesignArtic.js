import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const ArtDesignArtic = () => {
  return (
    <Box>
      <NavBar link="/ArtDesignDash" route2="/Artic" />
      <ApiPageInfo
        title={"Art Institute of Chicago API)"}
        linkUrl={"https://api.artic.edu/docs/#quick-start"}
        description={
          "The Art Institute of Chicago API provides JSON-formatted data as a REST-style service that allows developers to explore and integrate the museum’s public data into their projects."
        }
      />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://api.artic.edu/api/v1/artworks" />
        <Endpoints header="GET" endpoint="/" />
        <Endpoints
          header="GET"
          endpoint="/129884"
          description="/artworks/{id}"
        />
        <Endpoints
          header="GET"
          endpoint="?fields=id,title,artist_display,date_display,main_reference_number"
        />
        <Endpoints
          header="GET"
          endpoint="?page=2&limit=100"
          description="Include pagination"
        />
        <Endpoints header="GET" endpoint="/search?q=cats" />
        <Endpoints
          header="GET"
          endpoint="/search?q=cats&query[term][is_public_domain]=true"
        />
      </Box>
    </Box>
  );
};

export default ArtDesignArtic;
