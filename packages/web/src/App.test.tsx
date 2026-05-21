import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { APIS } from "./data/catalog.js";
import { ApiDetailPage } from "./pages/ApiDetailPage.js";
import { CategoryPage } from "./pages/CategoryPage.js";
import { HomePage } from "./pages/HomePage.js";
import { ThemeProvider } from "./theme/ThemeContext.js";

function renderAt(path: string, element: React.ReactNode) {
  return render(
    <ThemeProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:categoryId" element={<CategoryPage />} />
          <Route path="/:categoryId/:apiId" element={<ApiDetailPage />} />
          <Route path="*" element={element} />
        </Routes>
      </MemoryRouter>
    </ThemeProvider>,
  );
}

describe("catalog data", () => {
  it("loads APIs at build time", () => {
    expect(APIS.length).toBeGreaterThan(0);
  });
});

describe("HomePage", () => {
  it("renders the catalog and counts match", () => {
    renderAt("/", null);
    expect(screen.getByText(/Free API List/i)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`Showing ${APIS.length} of ${APIS.length} APIs`)),
    ).toBeInTheDocument();
  });
});

describe("CategoryPage", () => {
  it("renders APIs in the animals category", () => {
    renderAt("/animals", null);
    expect(screen.getByRole("heading", { name: "Animals", level: 4 })).toBeInTheDocument();
    expect(screen.getByText("Dog API")).toBeInTheDocument();
  });

  it("renders not-found for an unknown category", () => {
    renderAt("/this-is-not-real", <div>fallback</div>);
    expect(screen.getByText(/Not found/i)).toBeInTheDocument();
  });
});

describe("ApiDetailPage", () => {
  it("renders the detail page for a known API", () => {
    renderAt("/animals/cataas", null);
    expect(
      screen.getByRole("heading", { name: /Cat as a Service/i, level: 4 }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Endpoints/i)).toBeInTheDocument();
  });

  it("returns not-found for the wrong category for an API", () => {
    renderAt("/books/cataas", null);
    expect(screen.getByRole("heading", { name: /Not found/i })).toBeInTheDocument();
  });
});
