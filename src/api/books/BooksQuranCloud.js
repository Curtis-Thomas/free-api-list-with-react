import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const BooksQuranCloud = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "120vh",
      }}
    >
      <NavBar link="/BooksDash" route2="/QuranCloud" />
      <ApiPageInfo
        title={"Quran Cloud"}
        linkUrl={"https://alquran.cloud/api"}
        description={
          "The Al Quran Cloud allows you to read and hear the Quran being recited by Juz, Surah or Ayah. "
        }
      />
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
