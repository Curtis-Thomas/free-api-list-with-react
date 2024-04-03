import { Box, Grid } from "@mui/material";
import BtnRouting from "../../components/BtnRouting";
import NavBar from "../../navigation/NavBar";
import Hero from "./Hero";

const Main = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        pt: 5,
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Hero />
        <NavBar />
        <Grid
          container
          spacing={2}
          sx={{
            padding: 2,
          }}
        >
          <Grid item xs={12} sm={6}>
            <BtnRouting
              btnName="Animals"
              navigateTo="/AnimalsDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="8"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BtnRouting
              btnName="Anime"
              navigateTo="/AnimeDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BtnRouting
              btnName="Art & Design"
              navigateTo="/ArtDesignDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="3"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BtnRouting
              btnName="Books"
              navigateTo="/BooksDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="5"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <BtnRouting
              btnName="Development"
              navigateTo="/DevelopmentDash"
              amount="1"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <BtnRouting
              btnName="Dictionary"
              navigateTo="/DictionaryDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BtnRouting
              btnName="Entertainment"
              navigateTo="/EntertainmentDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="3"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BtnRouting
              btnName="Environment"
              navigateTo="/EnvironmentDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BtnRouting
              btnName="Games Comics"
              navigateTo="/GamesComicsDash"
              amount="2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BtnRouting
              btnName="Geocoding"
              navigateTo="/GeocodingDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="4"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BtnRouting
              btnName="Health"
              navigateTo="/HealthDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BtnRouting
              btnName="Personality"
              navigateTo="/PersonalityDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BtnRouting
              btnName="Sports Fitness"
              navigateTo="/SportsFitnessDash"
              backgroundColor="#0077ba"
              textColor="white"
              amount="2"
            />
          </Grid>

          {/* <BtnRouting
              btnName="Anti-Malware"
              navigateTo="/AntiMalwareDash"
              amount="0"
            /> */}
          {/* <BtnRouting
              btnName="Authentication"
              navigateTo="/AuthenticationDash"
            /> */}
          {/* <BtnRouting btnName="Blockchain" navigateTo="/BlockchainDash" /> */}
          {/* <BtnRouting btnName="Business" navigateTo="/BusinessDash" />
            <BtnRouting btnName="Calendar" navigateTo="/CalendarDash" />
            <BtnRouting btnName="Cloud" navigateTo="/CloudDash" />
            <BtnRouting btnName="ContInt" navigateTo="/ContIntDash" />
            <BtnRouting
              btnName="Cryptocurrency"
              navigateTo="/CryptocurrencyDash"
            />
            <BtnRouting
              btnName="CurrencyExchange"
              navigateTo="/CurrencyExchangeDash"
            />
            <BtnRouting
              btnName="Data Validation"
              navigateTo="/DataValidationDash"
            />
          {/* <BtnRouting
              btnName="Documents Production"
              navigateTo="/DocsProdDash"
            />
          </Grid> */}
          {/* Column 2 */}
          {/* <Grid item xs={12} sm={6}> */}
          {/* <BtnRouting btnName="Email" navigateTo="/EmailDash" />{" "} */}
          {/* <BtnRouting btnName="Events" navigateTo="/EventsDash" />{" "}
            <BtnRouting btnName="Finance" navigateTo="/FinanceDash" />{" "}
            <BtnRouting btnName="Food Drink" navigateTo="/FoodDrinkDash" />{" "} */}
          {/* <BtnRouting btnName="Government" navigateTo="/GovernmentDash" /> */}
          {/* <BtnRouting btnName="Jobs" navigateTo="/JobsDash" />{" "}
            <BtnRouting
              btnName="Machine Learning"
              navigateTo="/MachineLearningDash"
            />{" "}
            <BtnRouting btnName="Music" navigateTo="/MusicDash" />{" "}
            <BtnRouting btnName="News" navigateTo="/NewsDash" />{" "}
            <BtnRouting btnName="Open Data" navigateTo="/OpenDataDash" />{" "}
            <BtnRouting btnName="Open Source" navigateTo="/OpenSourceDash" />{" "}
            <BtnRouting btnName="Patent" navigateTo="/PatentDash" />
          </Grid> */}
          {/* Column 3 */}
          {/* <Grid item xs={12} sm={4}> */}
          {/* <BtnRouting btnName="Phone" navigateTo="/PhoneDash" />{" "}
            <BtnRouting btnName="Photography" navigateTo="/PhotographyDash" />{" "}
            <BtnRouting btnName="Programming" navigateTo="/ProgrammingDash" />{" "}
            <BtnRouting btnName="Science Math" navigateTo="/ScienceMathDash" />{" "}
            <BtnRouting btnName="Security" navigateTo="/SecurityDash" />{" "}
            <BtnRouting btnName="Shopping" navigateTo="/ShoppingDash" />{" "}
            <BtnRouting btnName="Social" navigateTo="/SocialDash" />{" "} */}

          {/* <BtnRouting btnName="Test Data" navigateTo="/TestDataDash" />{" "}
            <BtnRouting
              btnName="Text Analysis"
              navigateTo="/TextAnalysisDash"
            />{" "}
            <BtnRouting btnName="Tracking" navigateTo="/TrackingDash" />{" "}
            <BtnRouting
              btnName="Transportation"
              navigateTo="/TransportationDash"
            />{" "}
            <BtnRouting
              btnName="URL Shortener"
              navigateTo="/UrlShortenerDash"
            />{" "}
            <BtnRouting btnName="Vehicle" navigateTo="/VehicleDash" />{" "}
            <BtnRouting btnName="Video" navigateTo="/VideoDash" />{" "}
            <BtnRouting btnName="Weather" navigateTo="/WeatherDash" /> */}
        </Grid>
      </Box>
    </Box>
  );
};

export default Main;
