"use client";

import StepList from "@/components/StepList";
import WebsiteHeaderBanner from "@/components/WebsiteHeaderBanner";
import { BANNER_SHADOW_HEIGHT } from "@/utils/constants";
import { Work, WorkOutline } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { education, workExperience } from "./utils/data";

export default function SWEPage() {
  return (
    <Container
      maxWidth="md"
      sx={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <WebsiteHeaderBanner />
      <Box
        sx={{
          overflowX: "auto",
          py: `${BANNER_SHADOW_HEIGHT}px`,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <Box>
          <Typography variant="h5" color="coolersBlue1">
            Work experience
          </Typography>
          <StepList
            steps={workExperience}
            getIconFromIdx={(idx) => (idx === 0 ? <Work /> : <WorkOutline />)}
          />
        </Box>
        <Box>
          <Typography variant="h5" color="coolersBlue1">
            Education
          </Typography>
          <StepList steps={education} />
        </Box>
      </Box>
    </Container>
  );
}
