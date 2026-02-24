"use client";

import WebsiteHeader from "@/components/WebsiteHeader";
import { Container } from "@mui/material";
import "./globals.css";

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
      <WebsiteHeader variant="large" />
    </Container>
  );
}
