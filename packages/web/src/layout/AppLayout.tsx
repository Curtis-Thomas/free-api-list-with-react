import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { BarLeft } from "./BarLeft.js";
import { BarRight } from "./BarRight.js";
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Box
        sx={{
          minHeight: "5vh",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Header />
      </Box>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box
          sx={{
            width: "25%",
            position: "fixed",
            top: "5vh",
            bottom: "5vh",
            overflow: "auto",
            display: { xs: "none", md: "block" },
          }}
        >
          <BarLeft />
        </Box>

        <Box
          component="main"
          sx={(theme) => ({
            minHeight: "95vh",
            width: { xs: "100%", md: "50%" },
            marginLeft: { xs: 0, md: "25%" },
            backgroundColor: theme.palette.background.default,
            padding: 2,
            paddingTop: "6vh",
          })}
        >
          {children}
        </Box>

        <Box
          sx={{
            width: "25%",
            position: "fixed",
            top: "5vh",
            bottom: "5vh",
            right: 0,
            overflow: "auto",
            display: { xs: "none", md: "block" },
          }}
        >
          <BarRight />
        </Box>
      </Box>
      <Box sx={{ height: "5vh" }}>
        <Footer />
      </Box>
    </>
  );
}
