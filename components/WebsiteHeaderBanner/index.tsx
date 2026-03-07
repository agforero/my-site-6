import { theme } from "@/app/theme";
import { BANNER_SHADOW_HEIGHT, Z_INDEX } from "@/utils/constants";
import { Box } from "@mui/material";
import WebsiteHeader from "../WebsiteHeader";

export default function WebsiteHeaderBanner() {
  return (
    <Box
      sx={{
        position: "sticky",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        py: 2,
        boxShadow: `0px ${BANNER_SHADOW_HEIGHT}px 10px ${theme.palette.coolersNeutralInverted.main}`,
        zIndex: Z_INDEX.WEBSITE_HEADER_BANNER,
        flex: 0,
      }}
    >
      <WebsiteHeader variant="medium" />
    </Box>
  );
}
