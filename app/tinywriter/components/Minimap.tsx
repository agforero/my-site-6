import { Typography } from "@mui/material";

export default function Minimap({ text }: { text: string }) {
  return (
    <Typography
      sx={{
        fontSize: "2px",
        color: "white",
        width: "100%",
      }}
    >
      {text}
    </Typography>
  );
}
