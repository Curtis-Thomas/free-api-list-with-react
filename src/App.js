import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./core/header/Header";
import Main from "./core/main/Main";
import Footer from "./core/footer/Footer";
import AnimalDash from "./api/animals/Animals1Dash";
import AnimalsDailyCatFacts from "./api/animals/AnimalsDailyCatFacts";
import AnimalsCataas from "./api/animals/AnimalsCataas";

function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#E1D9D1", minHeight: "100vh" }}>
        <Box sx={{ height: "5vh" }}>
          <Header />
        </Box>
        <Box sx={{ minHeight: "85vh", padding: "16px" }}>
          <Routes>
            {/* <Route path="" element={< />} /> */}

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
