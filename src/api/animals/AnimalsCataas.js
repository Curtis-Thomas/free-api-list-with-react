import { Box, useTheme } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestImg from "../../tools/components/BoxTestImg";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const AnimalsCataas = () => {
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
      <NavBar link="/AnimalsDash" route2="/Cataas" />

      <ApiPageInfo
        title={"Cat as a service (CATAAS)"}
        linkUrl={"https://cataas.com/doc.html"}
        description={
          "Introducing CATAAS, your go-to REST API for spreading joy with cats! Dive into a world of endless feline entertainment with random cat GIFs served fresh from API. Whether you're seeking a dose of cuteness or some light-hearted fun, CATAAS has you covered. Simply integrate with ease and let the purr-fect moments unfold in your applications. Join the cat-loving community today and embrace the power of CATAAS!"
        }
      />
      {/* Test image box */}
      <BoxTestImg />
      <Box>
        {/* API information box */}
        <BoxApiInfo baseEndpoint="https://cataas.com/" />

        {/* Endpoints */}
        <Endpoints
          header="GET"
          endpoint="/cat"
          description="Retrieve a random cat"
        />

        <Endpoints
          header="GET"
          endpoint="/cat/:tag"
          description="Retrieve a random cat from a specific tag category"
        />

        <Endpoints
          header="GET"
          endpoint="/cat/gif"
          description="Retrieve a random GIF cat"
        />

        <Endpoints
          header="GET"
          endpoint="/cat/says/:text"
          description="Retrieve a random cat with custom text"
        />

        <Endpoints
          header="GET"
          endpoint="/cat/:tag/says/:text"
          description="Retrieve a random cat from a specific tag category with custom text"
        />

        <Endpoints
          header="GET"
          endpoint="/cat/says/:text?size=:size&color=:color"
          description="Retrieve a custom random cat with text, size, and color parameters"
        />
      </Box>
    </Box>
  );
};

export default AnimalsCataas;
