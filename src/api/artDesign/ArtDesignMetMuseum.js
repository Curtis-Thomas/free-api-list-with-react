import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import BoxTestCrud from "../../tools/BoxTestCrud";
import NavBar from "../../core/main/navigation/NavBar";


const ArtDesignMetMuseum = () => {
  return (
    <Box>
      <NavBar link="/ArtDesignDash" route2="/MetMuseum" />
       
      <Box>
        <BoxTestCrud/>
        <BoxApiInfo baseEndpoint="https://collectionapi.metmuseum.org/public/collection/v1"/>
        <Endpoints
          header="GET"
          endpoint="/objects?departmentIds=1"
          description="/objects?departmentIds={department-id}"
        />
         <Endpoints
          header="GET"
          endpoint="/objects?departmentIds=3|9|12"
          description="/objects?departmentIds={departmentId1|departmentId2|departmentId3}"
        />
         <Endpoints
          header="GET"
          endpoint="/objects?metadataDate=2018-10-22"
          description="/objects?metadataDate=yyyy-mm-dd"
        />
        <Endpoints
          header="GET"
          endpoint="/objects/437133"
          description="/objects/{objectID}"
        />
          <Endpoints
          header="GET"
          endpoint="/departments"
        />
         <Endpoints
          header="GET"
          endpoint="/search?isOnView=true&q=sunflower"
          description="/search?isOnView={true}&q={search-term}"
        />
        
        <Endpoints
          header="GET"
          endpoint="/search?q=sunflowers"
          description="/search?q={search-term}"
        />
      </Box>
    </Box>
  );
};

export default ArtDesignMetMuseum;