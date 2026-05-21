import { Navigate, useParams } from "react-router-dom";
import { APIS, CATEGORIES } from "../data/catalog.js";
import { NotFoundPage } from "./NotFoundPage.js";

const CATEGORY_DASH_MAP: Record<string, string> = {
  AnimalsDash: "animals",
  AnimeDash: "anime",
  AntiMalwareDash: "anti-malware",
  ArtDesignDash: "art-design",
  AuthenticationDash: "authentication",
  BlockchainDash: "blockchain",
  BooksDash: "books",
  BusinessDash: "business",
  CalendarDash: "calendar",
  CloudDash: "cloud",
  ContIntDash: "continuous-integration",
  CryptocurrencyDash: "cryptocurrency",
  CurrencyExchangeDash: "currency-exchange",
  DataValidationDash: "data-validation",
  DevelopmentDash: "development",
  DictionaryDash: "dictionary",
  DocsProdDash: "documentation",
  EmailDash: "email",
  EntertainmentDash: "entertainment",
  EnvironmentDash: "environment",
  EventsDash: "events",
  FinanceDash: "finance",
  FoodDrinkDash: "food-drink",
  GamesComicsDash: "games-comics",
  GeoCodingDash: "geocoding",
  GeocodingDash: "geocoding",
  GovernmentDash: "government",
  HealthDash: "health",
  JobsDash: "jobs",
  MachineLearningDash: "machine-learning",
  MusicDash: "music",
  NewsDash: "news",
  OpenDataDash: "open-data",
  OpenSourceDash: "open-source",
  PatentDash: "patent",
  PersonalityDash: "personality",
  PhoneDash: "phone",
  PhotographyDash: "photography",
  ProgrammingDash: "programming",
  ScienceMathDash: "science-math",
  SecurityDash: "security",
  ShoppingDash: "shopping",
  SocialDash: "social",
  SportsFitnessDash: "sports-fitness",
  TestingDash: "test-data",
  TextAnalysisDash: "text-analysis",
  TrackingDash: "tracking",
  TransportationDash: "transportation",
  UrlShortenerDash: "url-shortener",
  VehicleDash: "vehicle",
  VideoDash: "video",
  WeatherDash: "weather",
};

const LEGACY_API_NAME_MAP: Record<string, string> = {
  AnimalsDailyCatFacts: "daily-cat-facts",
  AnimalsCataas: "cataas",
  AnimalsDogApi: "dog-api",
  AnimalsDog: "dog-ceo",
  AnimalsMeowFacts: "meow-facts",
  AnimalsRandomDog: "random-dog",
  AnimalsShibeOnline: "shibe-online",
  AnimalsCatFacts: "cat-facts-ninja",
  Nekos: "nekos-best",
  StudioGhibli: "studio-ghibli",
  ArtDesignArtic: "art-institute-chicago",
  ArtDesignEmojiHub: "emojihub",
  ArtDesignMetMuseum: "met-museum",
  BooksABibliaDigital: "abibliadigital",
  BooksBibleApi: "bible-api",
  BooksGutendex: "gutendex",
  BooksPoetryDB: "poetrydb",
  BooksQuranCloud: "quran-cloud",
  DevelopmentCloudFlareTrace: "cloudflare-trace",
  DictionaryFreeDictionary: "free-dictionary",
  EntertainmentChuckNorris: "chuck-norris",
  EntertainmentCorpBuzzWords: "corp-buzzwords",
  EntertainmentTechy: "techy",
  EnvironmentUKCarbonIntensity: "uk-carbon-intensity",
  GamesComicsAmiibo: "amiibo",
  GamesComicsCheapshark: "cheapshark",
  GeoCodingAdministrativeDivisionsDb: "administrative-divisions-db",
  GeoCodingGeoJS: "geojs",
  GeoCodingGetTheData: "get-the-data",
  GeoCodingCountry: "country-is",
  HealthMakeupApi: "makeup-api",
  PersonalityQuoteClear: "jcquotes",
  SportsFitnessBallDontLie: "balldontlie",
  SportsfitnessCityBikes: "citybikes",
};

export function LegacyRedirect() {
  const { legacy, legacyChild } = useParams<{ legacy: string; legacyChild?: string }>();
  if (!legacy) return <NotFoundPage />;

  const categorySlug = CATEGORY_DASH_MAP[legacy];
  if (!categorySlug) {
    const ids = new Set(CATEGORIES.map((c) => c.id));
    if (ids.has(legacy.toLowerCase())) {
      return <Navigate to={`/${legacy.toLowerCase()}`} replace />;
    }
    return <NotFoundPage />;
  }

  if (!legacyChild) {
    return <Navigate to={`/${categorySlug}`} replace />;
  }

  const apiSlug = LEGACY_API_NAME_MAP[legacyChild];
  if (apiSlug) {
    const matchExists = APIS.some((a) => a.id === apiSlug && a.category === categorySlug);
    if (matchExists) {
      return <Navigate to={`/${categorySlug}/${apiSlug}`} replace />;
    }
  }

  return <Navigate to={`/${categorySlug}`} replace />;
}
