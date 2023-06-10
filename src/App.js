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
import AuthenticationDash from "./api/authentication/Authentication1Dash";
import BlockchainDash from "./api/blockchain/Blockchain1Dash";
import BooksDash from "./api/books/Books1Dash";
import BusinessDash from "./api/business/Business1Dash";
import CalendarDash from "./api/calendar/Calendar1Dash";
import CloudDash from "./api/cloud/Cloud1Dash";
import ContIntDash from "./api/contInt/ContInt1Dash";
import CryptocurrencyDash from "./api/cryptocurrency/Cryptocurrency1Dash";
import CurrencyExchangeDash from "./api/currencyExchange/CurrencyExchange1Dash";

function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#ffffff", minHeight: "101vh" }}>
        <Box sx={{ minHeight: "5vh" }}>
          <Header />
        </Box>
        <Box
          sx={{
            minHeight: "85vh",
            padding: 2,
            "@media screen and (max-width: 600px)": {
              padding: 1,
            },
            "@media screen and (min-width: 601px)": {
              margin: "0 auto",
              maxWidth: "960px",
            },
          }}
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/free-api-list-with-react/" element={<Main />} />

            {/* Dashboards */}
            <Route path="/AnimalsDash" element={<AnimalDash />} />
            <Route path="/AnimeDash" element={<AnimeDash />} />
            <Route path="/ArtDesignDash" element={<ArtDesignDash />} />
            <Route
              path="/AuthenticationDash"
              element={<AuthenticationDash />}
            />
            <Route path="/BlockchainDash" element={<BlockchainDash />} />
            <Route path="/BooksDash" element={<BooksDash />} />
            <Route path="/BusinessDash" element={<BusinessDash />} />
            <Route path="/CalendarDash" element={<CalendarDash />} />
            <Route path="/CloudDash" element={<CloudDash />} />
            <Route path="/ContIntDash" element={<ContIntDash />} />
            <Route
              path="/CryptocurrencyDash"
              element={<CryptocurrencyDash />}
            />
            <Route
              path="/CurrencyExchangeDash"
              element={<CurrencyExchangeDash />}
            />

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

            <Route path="/AntiMalwareDash" element={<AntiMalwareDash />} />

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
