import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const BooksPoetryDB = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "120vh",
      }}
    >
      <NavBar link="/BooksDash" route2="/PoetryDB" />
      <ApiPageInfo
        title={"PoetryDB"}
        linkUrl={
          "https://github.com/thundercomb/poetrydb/blob/master/README.md"
        }
        description={"PoetryDB is an API for internet poets."}
      />
      <Box />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://poetrydb.org" />
        <Endpoints header="GET" endpoint="/author" />
      </Box>
    </Box>
  );
};

export default BooksPoetryDB;
