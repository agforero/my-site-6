// theme.ts
import { createTheme } from "@mui/material/styles";
import { Averia_Serif_Libre, Karla } from "next/font/google";

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

const COOLERS_BLUE_1 = "#064789";
const COOLERS_BLUE_2 = "#427aa1";
const COOLERS_GREEN_1 = "#679436";
const COOLERS_GREEN_2 = "#a5be00";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) =>
  augmentColor({ color: { main: mainColor } });

declare module "@mui/material/styles" {
  interface Palette {
    coolersBlue1: Palette["primary"];
    coolersBlue2: Palette["primary"];
    coolersGreen1: Palette["primary"];
    coolersGreen2: Palette["primary"];
  }
  interface PaletteOptions {
    coolersBlue1?: PaletteOptions["primary"];
    coolersBlue2?: PaletteOptions["primary"];
    coolersGreen1?: PaletteOptions["primary"];
    coolersGreen2?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    coolersBlue1: true;
    coolersBlue2: true;
    coolersGreen1: true;
    coolersGreen2: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: "system-ui, sans-serif",

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
  },
});
