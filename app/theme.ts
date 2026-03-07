// theme.ts
import { createTheme } from "@mui/material/styles";
import { Averia_Serif_Libre, Grenze_Gotisch, Karla } from "next/font/google";

export const averiaSerifLibre = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-heading",
});

export const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-body",
});

export const grenzeGotisch = Grenze_Gotisch({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
  variable: "--font-cursive",
});

const COOLERS_BLUE_1 = "#064789";
const COOLERS_BLUE_2 = "#427aa1";
const COOLERS_GREEN_1 = "#679436";
const COOLERS_GREEN_2 = "#a5be00";
const COOLERS_NEUTRAL = "#ebf2fa";
const COOLERS_NEUTRAL_SECONDARY = "#a0a0a0";
const COOLERS_NEUTRAL_INVERTED = "#101010";

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
  }
  interface PaletteOptions {
    coolersBlue1?: PaletteOptions["primary"];
    coolersBlue2?: PaletteOptions["primary"];
    coolersGreen1?: PaletteOptions["primary"];
    coolersGreen2?: PaletteOptions["primary"];
    coolersNeutral?: PaletteOptions["primary"];
    coolersNeutralSecondary?: PaletteOptions["primary"];
    coolersNeutralInverted?: PaletteOptions["primary"];
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
      fontFamily: karla.style.fontFamily,
      color: COOLERS_NEUTRAL,
    },

    h1: { fontFamily: averiaSerifLibre.style.fontFamily },
    h2: { fontFamily: averiaSerifLibre.style.fontFamily },
    h3: { fontFamily: averiaSerifLibre.style.fontFamily },
    h4: { fontFamily: averiaSerifLibre.style.fontFamily },
    h5: { fontFamily: averiaSerifLibre.style.fontFamily },
    h6: { fontFamily: averiaSerifLibre.style.fontFamily },

    body1: {
      fontFamily: karla.style.fontFamily,
    },
    body2: {
      fontFamily: karla.style.fontFamily,
    },

    button: {
      fontFamily: karla.style.fontFamily,
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
    background: {
      default: COOLERS_NEUTRAL_INVERTED,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: spacing(2),
        },
      },
    },
  },
});
