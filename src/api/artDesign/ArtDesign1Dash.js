import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../core/main/navigation/NavBar";

const ArtDesignDash = () => {
  return (
    <Box>
      <NavBar link="/ArtDesignDash" />
      <Box>
        <BtnRouting
          btnName="Artic"
          navigateTo="ArtDesignArtic"
          backgroundColor="#0077ba"
          textColor="white"
        />
        <BtnRouting
          btnName="EmojiHub"
          navigateTo="ArtDesignEmojiHub"
          backgroundColor="#0077ba"
          textColor="white"
        />
        <BtnRouting
          btnName="MetMuseum"
          navigateTo="ArtDesignMetMuseum"
          backgroundColor="#0077ba"
          textColor="white"
        />
      </Box>
    </Box>
  );
};

export default ArtDesignDash;
