import { Box } from "@mui/material";
import BtnRouting from "../../core/main/BtnRouting";
import NavBar from "../../core/main/navigation/NavBar";

const ArtDesignDash = () => {
  return (
    <Box>
      <NavBar link="/ArtDesignDash" />
      <Box>
        <BtnRouting btnName="Artic" navigateTo="ArtDesignArtic" />
        <BtnRouting btnName="EmojiHub" navigateTo="ArtDesignEmojiHub" />
      </Box>
    </Box>
  );
};

export default ArtDesignDash;
