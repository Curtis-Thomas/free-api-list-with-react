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
          "Discover the spiritual richness of the Quran with the Al Quran Cloud API. Immerse yourself in the sacred text through seamless access to recitations by Juz, Surah, or Ayah. Whether you seek solace, inspiration, or understanding, the API offers a gateway to the profound teachings of the Quran. Delve into the beauty of recitation and deepen your connection with the holy scripture effortlessly. Join us in experiencing the transformative power of the Quran with the Al Quran Cloud API today!"
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
