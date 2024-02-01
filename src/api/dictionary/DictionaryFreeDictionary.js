import React from "react";
import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import ApiPageInfo from "../../core/main/ApiPageInfo";
import BoxTestCrud from "../../tools/components/BoxTestCrud";

const DictionaryFreeDictionary = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "120vh",
      }}
    >
      <NavBar link="/DictionaryDash" route2="/FreeDictionary" />
      <ApiPageInfo
        title={"Free Dictionary"}
        linkUrl={"https://dictionaryapi.dev/"}
        description={
          "Free Dictionary Api is a REST API to get definition of any English Word."
        }
      />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://api.dictionaryapi.dev/api/v2/entries/en" />
        <Endpoints
          header="GET"
          endpoint="/hello"
          description="As an example, to get definition of English word hello, you can send request to the above endpoint, you can choose any word of your choice by modifying the 'hello' in the above endpoint "
        />
      </Box>
    </Box>
  );
};

export default DictionaryFreeDictionary;
