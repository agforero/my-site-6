"use client";

import WebsiteHeaderBanner from "@/components/WebsiteHeaderBanner";
import { Box } from "@mui/material";

export default function PhotographyPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflowX: "auto",
      }}
    >
      <WebsiteHeaderBanner />
      <Box sx={{ overflowX: "auto", flex: 1 }}></Box>
    </Box>
  );
}
