// theme.ts
import { createTheme } from "@mui/material/styles";
import { Geist, Major_Mono_Display, Space_Mono } from "next/font/google";

// body
export const geist = Geist({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-sans",
});

// headers
export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mono",
});

// main title
export const majorMonoDisplay = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-cursive",
});

const COOLERS_BLUE_1 = "#107deb";
const COOLERS_BLUE_2 = "#427aa1";
const COOLERS_GREEN_1 = "#679436";
const COOLERS_GREEN_2 = "#a5be00";
const COOLERS_NEUTRAL = "#ebf2fa";
const COOLERS_NEUTRAL_SECONDARY = "#a0a0a0";
const COOLERS_NEUTRAL_INVERTED = "#101010";
const COOLERS_NEUTRAL_INVERTED_SECONDARY = "#161616";

const { palette, spacing } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) =>
  augmentColor({ color: { main: mainColor } });

declare module "@mui/material/styles" {
  interface Palette {
    coolersBlue1: Palette["primary"];
    coolersBlue2: Palette["primary"];
    coolersGreen1: Palette["primary"];
    coolersGreen2: Palette["primary"];
    coolersNeutral: Palette["primary"];
    coolersNeutralSecondary: Palette["primary"];
    coolersNeutralInverted: Palette["primary"];
    coolersNeutralInvertedSecondary: Palette["primary"];
  }
  interface PaletteOptions {
    coolersBlue1?: PaletteOptions["primary"];
    coolersBlue2?: PaletteOptions["primary"];
    coolersGreen1?: PaletteOptions["primary"];
    coolersGreen2?: PaletteOptions["primary"];
    coolersNeutral?: PaletteOptions["primary"];
    coolersNeutralSecondary?: PaletteOptions["primary"];
    coolersNeutralInverted?: PaletteOptions["primary"];
    coolersNeutralInvertedSecondary?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    coolersBlue1: true;
    coolersBlue2: true;
    coolersGreen1: true;
    coolersGreen2: true;
    coolersNeutral: true;
    coolersNeutralInverted: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsColorOverrides {
    coolersBlue1: true;
    coolersBlue2: true;
    coolersGreen1: true;
    coolersGreen2: true;
    coolersNeutral: true;
    coolersNeutralInverted: true;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    coolersBlue1: true;
    coolersBlue2: true;
    coolersGreen1: true;
    coolersGreen2: true;
    coolersNeutral: true;
    coolersNeutralInverted: true;
  }
}

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: spaceMono.style.fontFamily,
      color: COOLERS_NEUTRAL,
    },

    h1: { fontFamily: spaceMono.style.fontFamily },
    h2: { fontFamily: spaceMono.style.fontFamily },
    h3: { fontFamily: spaceMono.style.fontFamily },
    h4: { fontFamily: spaceMono.style.fontFamily },
    h5: { fontFamily: spaceMono.style.fontFamily },
    h6: { fontFamily: spaceMono.style.fontFamily },

    body1: {
      fontFamily: geist.style.fontFamily,
    },
    body2: {
      fontFamily: geist.style.fontFamily,
    },

    button: {
      fontFamily: spaceMono.style.fontFamily,
    },
  },
  palette: {
    coolersBlue1: createColor(COOLERS_BLUE_1),
    coolersBlue2: createColor(COOLERS_BLUE_2),
    coolersGreen1: createColor(COOLERS_GREEN_1),
    coolersGreen2: createColor(COOLERS_GREEN_2),
    coolersNeutral: createColor(COOLERS_NEUTRAL),
    coolersNeutralSecondary: createColor(COOLERS_NEUTRAL_SECONDARY),
    coolersNeutralInverted: createColor(COOLERS_NEUTRAL_INVERTED),
    coolersNeutralInvertedSecondary: createColor(
      COOLERS_NEUTRAL_INVERTED_SECONDARY,
    ),
    background: {
      default: COOLERS_NEUTRAL_INVERTED,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: spacing(0.5),
        },
      },
    },
  },
});
