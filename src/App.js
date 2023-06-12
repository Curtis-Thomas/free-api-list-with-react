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
import BooksABibliaDigital from "./api/books/BooksABibliDigital";
import BooksBibleApi from "./api/books/BooksBibleApi";
import DevelopmentDash from "./api/development/Development1Dash";
import DictionaryDash from "./api/dictionary/Dictionary1Dash";
import DocsProdDash from "./api/docsProd/DocsProd1Dash";
import EmailDash from "./api/email/Email1Dash";
import EntertainmentDash from "./api/entertainment/Entertainment1Dash";
import EnvironmentDash from "./api/environment/Environment1Dash";
import EventsDash from "./api/events/Events1Dash";
import FinanceDash from "./api/finance/Finance1Dash";
import FoodDrinkDash from "./api/foodDrink/FoodDrink1Dash";
import GamesComicsDash from "./api/gamesComics/GamesComics1Dash";
import GeoCodingDash from "./api/geocoding/GeoCoding1Dash";
import GovernmentDash from "./api/government/Government1Dash";
import HealthDash from "./api/health/Health1Dash";
import NewsDash from "./api/news/News1Dash";
import OpenDataDash from "./api/openData/OpenData1Dash";
import PatentDash from "./api/patent/Patent1Dash";
import PersonalityDash from "./api/personality/Personality1Dash";
import PhoneDash from "./api/phone/Phone1Dash";
import PhotographyDash from "./api/photography/Photography1Dash";
import ProgrammingDash from "./api/programming/Programming1Dash";
import ScienceMathDash from "./api/scienceMath/ScienceMath1Dash";
import ShoppingDash from "./api/shopping/Shopping1Dash";
import SocialDash from "./api/social/Social1Dash";
import SportsFitnessDash from "./api/sportsFitness/SportsFitness1Dash";
import TestDataDash from "./api/testData/TestData1Dash";
import TrackingDash from "./api/tracking/Tracking1Dash";
import TransportationDash from "./api/transportation/Transportation1Dash";
import UrlShortenerDash from "./api/urlShortener/UrlShortener1Dash";
import VehicleDash from "./api/vehicle/Vehicle1Dash";
import VideoDash from "./api/video/Video1Dash";
import WeatherDash from "./api/weather/Weather1Dash";
import JobsDash from "./api/jobs/Jobs1Dash";
import MachineLearningDash from "./api/machineLearning/MachineLearning1Dash";
import MusicDash from "./api/music/Music1Dash";
import SecurityDash from "./api/security/Security1Dash";
import DataValidationDash from "./api/dataValidation/DataValidation1Dash";
import OpenSourceDash from "./api/openSource/OpenSource1Dash";
import TextAnalysisDash from "./api/textAnalysis/TextAnalysis1Dash";
import Tools from "./tools/Tools";
import Documentation from "./documentation/Documentation";
import EntertainmentChuckNorris from "./api/entertainment/EntertainmentchuckNorris";
import EntertainmentCorpBuzzWords from "./api/entertainment/EntertainmentCorpBuzzWords";

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
            {/* Header Btn Routing */}
            <Route path="/Tools" element={<Tools />} />
            <Route path="/Docs" element={<Documentation />} />
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
              path="/DataValidationDash"
              element={<DataValidationDash />}
            />
            <Route path="/DevelopmentDash" element={<DevelopmentDash />} />
            <Route path="/DictionaryDash" element={<DictionaryDash />} />
            <Route path="/DocsProdDash" element={<DocsProdDash />} />
            <Route path="/EmailDash" element={<EmailDash />} />
            <Route
              path="/EntertainmentDash"
              element={<EntertainmentDash />}
            />{" "}
            <Route path="/EnvironmentDash" element={<EnvironmentDash />} />{" "}
            <Route path="/EventsDash" element={<EventsDash />} />{" "}
            <Route path="/FinanceDash" element={<FinanceDash />} />{" "}
            <Route path="/FoodDrinkDash" element={<FoodDrinkDash />} />{" "}
            <Route path="/GamesComicsDash" element={<GamesComicsDash />} />{" "}
            <Route path="/GeocodingDash" element={<GeoCodingDash />} />{" "}
            <Route path="/GovernmentDash" element={<GovernmentDash />} />{" "}
            <Route path="HealthDash" element={<HealthDash />} />{" "}
            <Route path="/JobsDash" element={<JobsDash />} />
            <Route
              path="/MachineLearningDash"
              element={<MachineLearningDash />}
            />
            <Route path="/MusicDash" element={<MusicDash />} />{" "}
            <Route path="/NewsDash" element={<NewsDash />} />{" "}
            <Route path="/OpenSourceDash" element={<OpenSourceDash />} />{" "}
            <Route path="/OpenDataDash" element={<OpenDataDash />} />{" "}
            <Route path="/PatentDash" element={<PatentDash />} />{" "}
            <Route path="/PersonalityDash" element={<PersonalityDash />} />{" "}
            <Route path="/PhoneDash" element={<PhoneDash />} />
            <Route path="/PhotographyDash" element={<PhotographyDash />} />{" "}
            <Route path="/ProgrammingDash" element={<ProgrammingDash />} />{" "}
            <Route path="/ScienceMathDash" element={<ScienceMathDash />} />{" "}
            <Route path="/SecurityDash" element={<SecurityDash />} />{" "}
            <Route path="/ShoppingDash" element={<ShoppingDash />} />{" "}
            <Route path="/SocialDash" element={<SocialDash />} />{" "}
            <Route path="/SportsFitnessDash" element={<SportsFitnessDash />} />{" "}
            <Route path="/TestDataDash" element={<TestDataDash />} />{" "}
            <Route path="/TextAnalysisDash" element={<TextAnalysisDash />} />{" "}
            <Route path="/TrackingDash" element={<TrackingDash />} />{" "}
            <Route
              path="/TransportationDash"
              element={<TransportationDash />}
            />{" "}
            <Route path="/UrlShortenerDash" element={<UrlShortenerDash />} />{" "}
            <Route path="/VehicleDash" element={<VehicleDash />} />{" "}
            <Route path="/VideoDash" element={<VideoDash />} />{" "}
            <Route path="/WeatherDash" element={<WeatherDash />} />
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
            {/* Books */}
            <Route
              path="/BooksDash/ABibliaDigital"
              element={<BooksABibliaDigital />}
            />
            <Route path="/BooksDash/BibleApi" element={<BooksBibleApi />} />
            {/* Entertainment */}
            <Route
              path="/EntertainmentDash/EntertainmentChuckNorris"
              element={<EntertainmentChuckNorris />}
            />
            <Route
              path="/EntertainmentDash/EntertainmentCorpBuzzWords"
              element={<EntertainmentCorpBuzzWords />}
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
