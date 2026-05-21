import { Box } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout.js";
import { ApiDetailPage } from "./pages/ApiDetailPage.js";
import { CategoryPage } from "./pages/CategoryPage.js";
import { DocsPage } from "./pages/DocsPage.js";
import { HomePage } from "./pages/HomePage.js";
import { LegacyRedirect } from "./pages/LegacyRedirect.js";
import { NotFoundPage } from "./pages/NotFoundPage.js";
import { ToolsPage } from "./pages/ToolsPage.js";
import { ThemeProvider } from "./theme/ThemeContext.js";

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
