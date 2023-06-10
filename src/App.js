import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./core/header/Header";
import Main from "./core/main/Main";
import Footer from "./core/footer/Footer";
import AnimalDash from "./api/animals/Animals1Dash";
import AnimalsDailyCatFacts from "./api/animals/AnimalsDailyCatFacts";
import AnimalsCataas from "./api/animals/AnimalsCataas";
import AnimalsDogApi from "./api/animals/AnimalsDogApi";
import AnimalsDog from "./api/animals/AnimalsDog";
import AnimalsMeowFacts from "./api/animals/AnimalsMeowFacts";
import AnimeDash from "./api/anime/Anime1Dash";
import AntiMalwareDash from "./api/antiMalware/AntiMalware1Dash";
import ArtDesignDash from "./api/artDesign/ArtDesign1Dash";
import ArtDesignArtic from "./api/artDesign/ArtDesignArtic";
import ArtDesignEmojiHub from "./api/artDesign/ArtDesignEmojiHub";

function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#E1D9D1", minHeight: "101vh" }}>
        <Box sx={{ minHeight: "5vh" }}>
          <Header />
        </Box>
        <Box sx={{ minHeight: "85vh", padding: "16px" }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/free-api-list-with-react/" element={<Main />} />

            <Route path="/AnimalsDash" element={<AnimalDash />} />
            <Route
              path="/AnimalsDash/AnimalsDailyCatFacts"
              element={<AnimalsDailyCatFacts />}
            />
            <Route
              path="/AnimalsDash/AnimalsCataas"
              element={<AnimalsCataas />}
            />
            <Route
              path="/AnimalsDash/AnimalsDogApi"
              element={<AnimalsDogApi />}
            />
            <Route path="/AnimalsDash/AnimalsDog" element={<AnimalsDog />} />
            <Route
              path="/AnimalsDash/AnimalsMeowFacts"
              element={<AnimalsMeowFacts />}
            />

            <Route path="/AnimeDash" element={<AnimeDash />} />
            <Route path="/AntiMalwareDash" element={<AntiMalwareDash />} />
            <Route path="/ArtDesignDash" element={<ArtDesignDash />} />
            <Route
              path="/ArtDesignDash/ArtDesignArtic"
              element={<ArtDesignArtic />}
            />
            <Route
              path="/ArtDesignDash/ArtDesignEmojiHub"
              element={<ArtDesignEmojiHub />}
            />
          </Routes>
        </Box>
        <Box sx={{ height: "5vh" }}>
          <Footer />
        </Box>
      </Box>
    </Router>
  );
}

export default App;
