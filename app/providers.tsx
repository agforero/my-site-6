"use client";

import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import { theme } from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {
            "--coolers-blue-1": theme.palette.coolersBlue1.main,
            "--coolers-blue-2": theme.palette.coolersBlue2.main,
            "--coolers-green-1": theme.palette.coolersGreen1.main,
            "--coolers-green-2": theme.palette.coolersGreen2.main,
            "--coolers-neutral": theme.palette.coolersNeutral.main,
            "--coolers-neutral-inverted":
              theme.palette.coolersNeutralInverted.main,
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
}
