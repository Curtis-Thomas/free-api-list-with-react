import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import NavBar from "../../navigation/NavBar";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const ArtDesignMetMuseum = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "120vh",
      }}
    >
      <NavBar link="/ArtDesignDash" route2="/MetMuseum" />
      <ApiPageInfo
        title={"The Metropolitan Museum of Art Collection API"}
        linkUrl={"https://metmuseum.github.io/"}
        description={
          "The Metropolitan Museum of Art provides select datasets of information on more than 470,000 artworks in its Collection for unrestricted commercial and noncommercial use."
        }
      />

      <Box>
        <BoxTestCrud />
        <BoxApiInfo baseEndpoint="https://collectionapi.metmuseum.org/public/collection/v1" />
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
        <Endpoints header="GET" endpoint="/departments" />
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
