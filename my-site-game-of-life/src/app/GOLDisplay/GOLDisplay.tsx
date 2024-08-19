import { Box, Container, Grid, Typography } from "@mui/material";

interface GOLDisplayProps {
  text: string;
}

export default function GOLDisplay(props: GOLDisplayProps) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: { sm: "375px", md: "750px" },
          minWidth: { sm: "375px", md: "750px" },
          p: 1,
          border: "1px solid white",
        }}
      >
        <Grid container columns={{ xs: 36, md: 72 }}>
          {props.text.split("").map((char, i) => (
            <Grid key={i} xs={1} sx={{ width: "1em" }}>
              <Typography sx={{ fontFamily: "Space Mono", lineHeight: "1em" }}>
                {char}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
