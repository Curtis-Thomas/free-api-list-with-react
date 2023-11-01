import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../core/main/navigation/NavBar";
import BoxTestCrud from "../../tools/BoxTestCrud";

const BooksQuranCloud = () => {
  return (
    <Box>
      <NavBar link="/BooksDash" route2="/QuranCloud" />
      <Box />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://api.alquran.cloud/v1" />
        <Endpoints header="GET" endpoint="/quran/en.asad" />
      </Box>
    </Box>
  );
};

export default BooksQuranCloud;
