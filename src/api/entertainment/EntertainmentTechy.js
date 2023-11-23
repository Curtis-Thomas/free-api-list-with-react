import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/BoxTestCrud";

const EntertainmentTechy = () => {
  return (
    <Box>
      <NavBar link="/EntertainmentDash" route2="/Techy" />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://techy-api.vercel.app/api" />
        <Endpoints header="GET" endpoint="/json" description="" />
      </Box>
    </Box>
  );
};

export default EntertainmentTechy;
