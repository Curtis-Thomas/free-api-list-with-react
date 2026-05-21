import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { ThemeProvider } from "./theme/ThemeContext.js";
import { AppLayout } from "./layout/AppLayout.js";
import { HomePage } from "./pages/HomePage.js";
import { CategoryPage } from "./pages/CategoryPage.js";
import { ApiDetailPage } from "./pages/ApiDetailPage.js";
import { ToolsPage } from "./pages/ToolsPage.js";
import { DocsPage } from "./pages/DocsPage.js";
import { NotFoundPage } from "./pages/NotFoundPage.js";
import { LegacyRedirect } from "./pages/LegacyRedirect.js";

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/:categoryId" element={<CategoryPage />} />
            <Route path="/:categoryId/:apiId" element={<ApiDetailPage />} />

            <Route path="/Tools" element={<Navigate to="/tools" replace />} />
            <Route path="/Docs" element={<Navigate to="/docs" replace />} />
            <Route path="/free-api-list-with-react" element={<Navigate to="/" replace />} />
            <Route path="/free-api-list-with-react/*" element={<Navigate to="/" replace />} />
            <Route path="/:legacy" element={<LegacyRedirect />} />
            <Route path="/:legacy/:legacyChild" element={<LegacyRedirect />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
export { Box };
