import { theme } from "@/app/theme";
import { Z_INDEX } from "@/utils/constants";
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
        pt: { xs: 2, lg: 4 },
        px: { xs: 2, lg: 0 },
        zIndex: Z_INDEX.WEBSITE_HEADER_BANNER,
        backgroundColor: theme.palette.coolersNeutralInverted.main,
        flex: 0,
      }}
    >
      <Box
        sx={{
          // width: "100%",
          p: 2,
          pt: 1,
          backgroundColor: theme.palette.coolersNeutralInvertedSecondary.main,
          border: `1px solid ${theme.palette.coolersNeutralInvertedSecondary.light}`,
          borderRadius: theme.spacing(1),
        }}
      >
        <WebsiteHeader variant="medium" />
      </Box>
    </Box>
  );
}
