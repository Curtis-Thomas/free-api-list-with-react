import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const BooksBibleApi = () => {
  return (
    <Box>
      <NavBar link="/BooksDash" route2="/BibleApi" />
      <ApiPageInfo
        title={"Bible API"}
        linkUrl={"https://bible-api.com"}
        description={
          "This is a tiny little web app that provides a JSON API for grabbing bible verses and passages."
        }
      />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://bible-api.com" />
        <Endpoints
          header="GET"
          endpoint="/john 3:16"
          description="/BOOK+CHAPTER:VERSE"
        />
        <Endpoints
          header="GET"
          endpoint="/jn 3:16"
          description="abbreviated book name"
        />
        <Endpoints
          header="GET"
          endpoint="/romans+12:1-2"
          description="verse range"
        />
        <Endpoints
          header="GET"
          endpoint="/romans 12:1-2,5-7,9,13:1-9&10"
          description="multiple ranges"
        />
        <Endpoints
          header="GET"
          endpoint="/john 3:16?translation=kjv"
          description="different translation"
        />
        <Endpoints
          header="GET"
          endpoint="/john 3:16?verse_numbers=true"
          description="verse numbers"
        />
        <Endpoints
          header="GET"
          endpoint="/john+3:16?callback=func"
          description="jsonp"
        />
      </Box>
    </Box>
  );
};

export default BooksBibleApi;
