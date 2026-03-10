"use client";

import WebsiteHeader from "@/components/WebsiteHeader";
import { Box, Container } from "@mui/material";
import "./globals.css";
import { theme } from "./theme";

export default function Home() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          p: { xs: 0, sm: 2 },
          pt: { xs: 0, sm: 1 },
          backgroundColor: {
            xs: undefined,
            sm: theme.palette.coolersNeutralInvertedSecondary.main,
          },
          border: {
            xs: undefined,
            sm: `1px solid ${theme.palette.coolersNeutralInvertedSecondary.light}`,
          },
          borderRadius: theme.spacing(1),
        }}
      >
        <WebsiteHeader variant="large" />
      </Box>
    </Container>
  );
}
