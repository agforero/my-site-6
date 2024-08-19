"use client";
import styles from "./page.module.css";
import { Box, ThemeProvider } from "@mui/material";
import GOLDisplay from "./GOLDisplay/GOLDisplay";

// import MUI fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/space-mono";
import theme from "./theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box component="main" className={styles.main}>
        <GOLDisplay
          text={
            // "Hello, my name is Agustin Forero. This is my website. Blah blah blah. This is what it looks like if I just keep typing and typing and typing."
            "_________9_________9_________9_________9_________9_________9_________9_________9_________9_________9_________9_________9_________9_________9_________9"
            // "I am a versatile software developer with a broad range of experience in full-stack development, research and education. Throughout my academic and professional pursuits, I have gained proficiency in programming languages such as C, C++ and Python, primarily focusing on back-end development. However, my recent work at InterSystems has allowed me to expand my expertise to encompass front-end design utilizing React, Next.js and Bootstrap. My versatility in both back- and front-end development enables me to confidently tackle challenges across all levels of the tech stack."
          }
        />
      </Box>
    </ThemeProvider>
  );
}
