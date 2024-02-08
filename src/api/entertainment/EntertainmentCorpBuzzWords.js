import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const EntertainmentCorpBuzzWords = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "120vh",
      }}
    >
      <NavBar link="/EntertainmentDash" route2="/CorpBuzzWords" />
      <ApiPageInfo
        title={"Corporate BuzzWord Generator"}
        linkUrl={"https://github.com/sameerkumar18/corporate-bs-generator-api"}
        description={
          "Empower your projects with the Corporate BS Generator API, designed to infuse them with industry-savvy spin. Seamlessly integrate the buzzword generator to randomly select phrases that can give your application an edge in any corporate landscape. Whether you're aiming for innovation or simply looking to spice up your content, the API delivers the perfect blend of corporate jargon to captivate your audience. Embrace the power of spin and propel your application forward with the Corporate BS Generator API today!"
        }
      />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://corporatebs-generator.sameerkumar.website" />
        <Endpoints header="GET" endpoint="/" description="" />
      </Box>
    </Box>
  );
};

export default EntertainmentCorpBuzzWords;
