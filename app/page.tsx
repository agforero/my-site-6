"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import "./globals.css";

export default function Home() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ width: "fit-content" }}>
        <Typography variant="h1" className="gradient-text">
          Agustin Forero
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "right" }}>
            <Button variant="outlined" color="coolersBlue1">
              Software engineer
            </Button>
          </Box>
          <Box
            sx={{
              flex: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>and</Typography>
          </Box>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "left" }}>
            <Button variant="outlined" color="coolersGreen1">
              Photographer
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
