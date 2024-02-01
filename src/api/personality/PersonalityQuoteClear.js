import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const PersonalityQuoteClear = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "120vh",
      }}
    >
      {/* Navigation bar */}
      <NavBar link="/PersonalityDash" route2="/QuoteClear" />

      <ApiPageInfo
        title={"jcquotess"}
        linkUrl={"https://github.com/MauricioRobayo/jcquotes"}
        description={
          "Ever growing list of quotes from James Clear's 3-2-1 Newsletter."
        }
      />

      {/* CRUD test box */}
      <BoxTestCrud />

      <Box>
        {/* API information box */}
        <BoxApiInfo baseEndpoint="https://www.jcquotes.com/api/quotes" />

        {/* Endpoint */}
        <Endpoints header="GET" endpoint="/random" />
      </Box>
    </Box>
  );
};

export default PersonalityQuoteClear;
