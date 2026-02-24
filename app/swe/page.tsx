"use client";

import StepList from "@/components/StepList";
import WebsiteHeaderBanner from "@/components/WebsiteHeaderBanner";
import { formatDuration } from "@/utils/formatDuration";
import { Work, WorkOutline } from "@mui/icons-material";
import { Box, Container, Divider, List, Typography } from "@mui/material";
import { useState } from "react";
import {
  sweEducation,
  sweLanguagesAndTechnologies,
  sweSummary,
  sweWorkExperience,
} from "./utils/data";

export default function SWEPage() {
  const [now] = useState(() => Date.now());
  function diffToHHMMSS(): string {
    const last = sweWorkExperience.at(-1);
    return last?.startDate
      ? formatDuration(last.startDate, new Date(now))
      : "0 seconds";
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflowX: "auto",
      }}
    >
      <WebsiteHeaderBanner />
      <Box
        sx={{
          overflowX: "auto",
          py: 3,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Box>
          <Typography variant="h5" color="coolersBlue1">
            About Me
          </Typography>
          <Typography variant="body1" sx={{ py: 1, whiteSpace: "pre-line" }}>
            {sweSummary}
          </Typography>
        </Box>
        <Divider />
        <Box>
          <Typography variant="h5" color="coolersBlue1">
            Languages and technologies
          </Typography>
          <List sx={{ listStyleType: "disc", pl: 4 }}>
            {sweLanguagesAndTechnologies.map((item, idx) => (
              <Typography key={idx} component="li">
                {item}
              </Typography>
            ))}
          </List>
        </Box>
        <Divider />
        <Box>
          <Typography variant="h5" color="coolersBlue1">
            Work experience
          </Typography>
          <Typography variant="caption">
            I{"'"}ve been coding professionally for {diffToHHMMSS()}, minus
            weekends and holidays.
          </Typography>
          <StepList
            steps={sweWorkExperience}
            getIconFromIdx={(idx) =>
              idx === 0 || idx === 1 ? <Work /> : <WorkOutline />
            }
          />
        </Box>
        <Divider />
        <Box>
          <Typography variant="h5" color="coolersBlue1">
            Education
          </Typography>
          <StepList steps={sweEducation} />
        </Box>
      </Box>
    </Container>
  );
}
