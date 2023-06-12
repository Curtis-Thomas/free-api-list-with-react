import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../core/main/navigation/NavBar";

const EntertainmentDash = () => {
  return (
    <Box>
      <NavBar link="/EntertainmentDash" />
      <Box>
        <BtnRouting
          btnName="Chuck Norris"
          navigateTo="EntertainmentChuckNorris"
          backgroundColor="#0077ba"
          textColor="white"
        />
        <BtnRouting
          btnName="Corp Buzz Words"
          navigateTo="EntertainmentCorpBuzzWords"
          backgroundColor="#0077ba"
          textColor="white"
        />
      </Box>
    </Box>
  );
};

export default EntertainmentDash;
