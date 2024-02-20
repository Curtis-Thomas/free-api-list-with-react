import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Header from "./core/header/Header";
import Main from "./core/main/Main";
import Footer from "./core/footer/Footer";
import Tools from "./tools/Tools";
import Documentation from "./documentation/Documentation";

import theme from "../src/themes/theme";
import themeDark from "../src/themes/themeDark";
import themeDracula from "./themes/themeDracula";
import themeCobalt from "./themes/themeCobalt";
import themeGruvBox from "./themes/themeGruvBox";
import themeHighContrast from "./themes/themeHighContrast";
import themeMero from "./themes/themeMero";
import themeOneDark from "./themes/themeOneDark";
import themeRadical from "./themes/themeRadical";
import themeSynthwave from "./themes/themeSynthwave";
import themeTokyoNight from "./themes/themeTokyoNight";

// Import all the components for different routes
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
import EntertainmentChuckNorris from "./api/entertainment/EntertainmentchuckNorris";
import EntertainmentCorpBuzzWords from "./api/entertainment/EntertainmentCorpBuzzWords";
import EntertainmentTechy from "./api/entertainment/EntertainmentTechy";
import PersonalityQuoteClear from "./api/personality/PersonalityQuoteClear";
import ArtDesignMetMuseum from "./api/artDesign/ArtDesignMetMuseum";
import BooksGutendex from "./api/books/BooksGutendex";
import AnimeNekos from "./api/anime/AnimeNekos";
import AnimeStudioGhibli from "./api/anime/AnimeStudioGhibli";
import BooksPoetryDB from "./api/books/BooksPoetryDb";
import BooksQuranCloud from "./api/books/BooksQuranCloud";
import EnvironmentUKCarbonIntensity from "./api/environment/EnvironmentUKCarbonIntensity";
import HealthMakeupApi from "./api/health/HealthMakeupApi";
import SportsFitnessCityBikes from "./api/sportsFitness/SportsFitnessCityBikes";
import SportsFitnessBallDontLie from "./api/sportsFitness/SportsFitnessBallDontLie";
import DictionaryFreeDictionary from "./api/dictionary/DictionaryFreeDictionary";
import GeoCodingAdministrativeDivisionsDb from "./api/geocoding/GeocodingAdministrativeDivisionsDb";
import GeoCodingGeoJS from "./api/geocoding/GeoCodingGeoJS";
import BarLeft from "./components/barLeft/BarLeft";
import BarRight from "./components/barRight/BarRight";
import AnimalsRandomDog from "./api/animals/AnimalsRandomDog";
import AnimalsShibeOnline from "./api/animals/AnimalsShibeOnline";
import GeoCodingGetTheData from "./api/geocoding/GeoCodingGetTheData";
import GeoCodingCountry from "./api/geocoding/GeoCodingCountry";
import AnimalsCatFacts from "./api/animals/AnimalsCatFacts";

const lightTheme = createTheme(theme);
const darkTheme = createTheme(themeDark);
const draculaTheme = createTheme(themeDracula);
const cobaltTheme = createTheme(themeCobalt);
const gruvboxTheme = createTheme(themeGruvBox);
const highContrastTheme = createTheme(themeHighContrast);
const meroTheme = createTheme(themeMero);
const oneDarkTheme = createTheme(themeOneDark);
const radicalTheme = createTheme(themeRadical);
const synthwaveTheme = createTheme(themeSynthwave);
const tokyoNightTheme = createTheme(themeTokyoNight);

const themes = {
  light: lightTheme,
  dark: darkTheme,
  dracula: draculaTheme,
  cobalt: cobaltTheme,
  gruvbox: gruvboxTheme,
  highcontrast: highContrastTheme,
  mero: meroTheme,
  onedark: oneDarkTheme,
  radical: radicalTheme,
  synthwave: synthwaveTheme,
  tokyonight: tokyoNightTheme,
};

/**
 * This array of objects defines the routes to be rendered on the Page.
 * The App will run a loop on these route configurations. This makes the function scalable
 * When new apis are added, please add the respective routes in this object
 * Please maintain the alphabatical order.
 */
const routeConfig = [
  // Header Files
  { path: "/", component: Main },
  { path: "/free-api-list-with-react/", component: Main },

  // Tools
  { path: "/Tools", component: Tools },

  // Documentation
  { path: "/Docs", component: Documentation },

  // Animals
  { path: "/AnimalsDash", component: AnimalDash },
  { path: "/AnimalsDash/AnimalsCataas", component: AnimalsCataas },
  {
    path: "/AnimalsDash/AnimalsDailyCatFacts",
    component: AnimalsDailyCatFacts,
  },
  { path: "/AnimalsDash/AnimalsDog", component: AnimalsDog },
  { path: "/AnimalsDash/AnimalsDogApi", component: AnimalsDogApi },
  { path: "/AnimalsDash/AnimalsMeowFacts", component: AnimalsMeowFacts },
  { path: "/AnimalsDash/AnimalsRandomDog", component: AnimalsRandomDog },
  { path: "/AnimalsDash/AnimalsShibeOnline", component: AnimalsShibeOnline },
  { path:"/AnimalsDash/AnimalsCatFacts", component:AnimalsCatFacts},

  // Anime Dashboard
  { path: "/AnimeDash", component: AnimeDash },
  { path: "/AnimeDash/Nekos", component: AnimeNekos },
  { path: "/AnimeDash/StudioGhibli", component: AnimeStudioGhibli },

  // AntiMalware Dashboard
  { path: "/AntiMalwareDash", component: AntiMalwareDash },

  // Art & Design
  { path: "/ArtDesignDash", component: ArtDesignDash },
  { path: "/ArtDesignDash/ArtDesignArtic", component: ArtDesignArtic },
  { path: "/ArtDesignDash/ArtDesignEmojiHub", component: ArtDesignEmojiHub },
  { path: "/ArtDesignDash/ArtDesignMetMuseum", component: ArtDesignMetMuseum },

  // Authentication Dashboard
  { path: "/AuthenticationDash", component: AuthenticationDash },

  // Blockchain Dashboard
  { path: "/BlockchainDash", component: BlockchainDash },

  // Books
  { path: "/BooksDash", component: BooksDash },
  { path: "/BooksDash/BooksABibliaDigital", component: BooksABibliaDigital },
  { path: "/BooksDash/BooksBibleApi", component: BooksBibleApi },
  { path: "/BooksDash/BooksGutendex", component: BooksGutendex },
  { path: "/BooksDash/BooksPoetryDB", component: BooksPoetryDB },
  { path: "/BooksDash/BooksQuranCloud", component: BooksQuranCloud },

  // Business Dashboard
  { path: "/BusinessDash", component: BusinessDash },

  // Calendar Dashboard
  { path: "/CalendarDash", component: CalendarDash },

  // Cloud Dashboard
  { path: "/CloudDash", component: CloudDash },

  // ContInt Dashboard
  { path: "/ContIntDash", component: ContIntDash },

  // Cryptocurrency Dashboard
  { path: "/CryptocurrencyDash", component: CryptocurrencyDash },

  // Currency Exchange Dashboard
  { path: "/CurrencyExchangeDash", component: CurrencyExchangeDash },

  // Data Validation Dashboard
  { path: "/DataValidationDash", component: DataValidationDash },

  // Development Dashboard
  { path: "/DevelopmentDash", component: DevelopmentDash },

  // Dictionary Dashboard
  { path: "/DictionaryDash", component: DictionaryDash },
  {
    path: "/DictionaryDash/DictionaryFreeDictionary",
    component: DictionaryFreeDictionary,
  },

  // Docs Prod Dashboard
  { path: "/DocsProdDash", component: DocsProdDash },

  // Email Dashboard
  { path: "/EmailDash", component: EmailDash },

  // Entertainment
  { path: "/EntertainmentDash", component: EntertainmentDash },
  {
    path: "/EntertainmentDash/EntertainmentChuckNorris",
    component: EntertainmentChuckNorris,
  },
  {
    path: "/EntertainmentDash/EntertainmentCorpBuzzWords",
    component: EntertainmentCorpBuzzWords,
  },
  {
    path: "/EntertainmentDash/EntertainmentTechy",
    component: EntertainmentTechy,
  },

  // Environment Dashboard
  { path: "/EnvironmentDash", component: EnvironmentDash },
  {
    path: "/EnvironmentDash/EnvironmentUKCarbonIntensity",
    component: EnvironmentUKCarbonIntensity,
  },

  // Events Dashboard
  { path: "/EventsDash", component: EventsDash },

  // Finance Dashboard
  { path: "/FinanceDash", component: FinanceDash },

  // Food & Drink Dashboard
  { path: "/FoodDrinkDash", component: FoodDrinkDash },

  // Games & Comics Dashboard
  { path: "/GamesComicsDash", component: GamesComicsDash },

  // GeoCoding Dashboard
  { path: "/GeoCodingDash", component: GeoCodingDash },
  {
    path: "/GeoCodingDash/GeoCodingAdministrativeDivisionsDb",
    component: GeoCodingAdministrativeDivisionsDb,
  },
  { path: "/GeoCodingDash/GeoCodingGeoJS", component: GeoCodingGeoJS },
  {
    path: "/GeoCodingDash/GeoCodingGetTheData",
    component: GeoCodingGetTheData,
  },
  { path: "/GeoCodingDash/GeoCodingCountry", component: GeoCodingCountry },

  // Government Dashboard
  { path: "/GovernmentDash", component: GovernmentDash },

  // Health Dashboard
  { path: "/HealthDash", component: HealthDash },
  { path: "/HealthDash/HealthMakeupApi", component: HealthMakeupApi },

  // Jobs Dashboard
  { path: "/JobsDash", component: JobsDash },

  // Machine Learning Dashboard
  { path: "/MachineLearningDash", component: MachineLearningDash },

  // Music Dashboard
  { path: "/MusicDash", component: MusicDash },

  // News Dashboard
  { path: "/NewsDash", component: NewsDash },

  // Open Data Dashboard
  { path: "/OpenDataDash", component: OpenDataDash },

  // Open Source Projects Dashboard
  { path: "/OpenSourceDash", component: OpenSourceDash },

  // Patent Dashboard
  { path: "/PatentDash", component: PatentDash },

  // Personality
  { path: "/PersonalityDash", component: PersonalityDash },
  {
    path: "/PersonalityDash/PersonalityQuoteClear",
    component: PersonalityQuoteClear,
  },

  // Phone Dashboard
  { path: "/PhoneDash", component: PhoneDash },

  // Photography Dashboard
  { path: "/PhotographyDash", component: PhotographyDash },

  // Programming Dashboard
  { path: "/ProgrammingDash", component: ProgrammingDash },

  // Science & Math Dashboard
  { path: "/ScienceMathDash", component: ScienceMathDash },

  // Security Dashboard
  { path: "/SecurityDash", component: SecurityDash },

  // Shopping Dashboard
  { path: "/ShoppingDash", component: ShoppingDash },

  // Social Dashboard
  { path: "/SocialDash", component: SocialDash },

  // Sports & Fitness Dashboard
  { path: "/SportsFitnessDash", component: SportsFitnessDash },
  {
    path: "/SportsFitnessDash/SportsFitnessBallDontLie",
    component: SportsFitnessBallDontLie,
  },
  {
    path: "/SportsFitnessDash/SportsfitnessCityBikes",
    component: SportsFitnessCityBikes,
  },

  // Testing Dashboard
  { path: "/TestingDash", component: TestDataDash },

  // Text Analysis Dashboard
  { path: "/TextAnalysisDash", component: TextAnalysisDash },

  // Tracking Dashboard
  { path: "/TrackingDash", component: TrackingDash },

  // Transportation Dashboard
  { path: "/TransportationDash", component: TransportationDash },

  // URL Shortener Dashboard
  { path: "/UrlShortenerDash", component: UrlShortenerDash },

  // Vehicle Dashboard
  { path: "/VehicleDash", component: VehicleDash },

  // Video Dashboard
  { path: "/VideoDash", component: VideoDash },

  // Weather Dashboard
  { path: "/WeatherDash", component: WeatherDash },
];

/**
 * This the main Function which shows all the apis
 * @returns
 */

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const activeTheme = themes[currentTheme];

  const handleThemeChange = (selectedTheme) => {
    setCurrentTheme(selectedTheme);
    // Perform any other actions related to theme change if needed
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <Router>
        <Box
          sx={{
            minHeight: "5vh",
          }}
        >
          {/* Pass onThemeChange to Header component */}
          <Header />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "25%",
              position: "fixed",

              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <BarLeft />
          </Box>

          <Box
            sx={{
              minHeight: "100vh",
              width: { xs: "100%", sm: "100%", md: "50%" },
              marginLeft: { xs: "0%", sm: "0%", md: "25%" },
            }}
          >
            <Box>
              <Routes>
                {/* Render the routes based on the routeConfig */}
                {routeConfig.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
              </Routes>
            </Box>
          </Box>

          <Box
            sx={{
              width: "25%",
              position: "fixed",
              marginLeft: "75%",

              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <BarRight
              onThemeChange={handleThemeChange}
              currentTheme={currentTheme}
            />
          </Box>
        </Box>
        <Box sx={{ height: "5vh" }}>
          {/* Render the Footer component */}
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
