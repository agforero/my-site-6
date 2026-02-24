import { theme } from "@/app/theme";
import { PHOTOGRAPHY_URL_ROOT, SWE_URL_ROOT } from "@/utils/constants";
import { ArrowBack, ArrowForward, Camera, Terminal } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";

interface WebsiteHeaderProps {
  variant: "large" | "medium";
}

function WebsiteHeaderMedium({ pathname }: { pathname: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [biggerButtonWidth, setBiggerButtonWidth] = useState<number>(0);
  useLayoutEffect(() => {
    if (ref.current) {
      const width = ref.current.offsetWidth;
      setBiggerButtonWidth(width);
    }
  }, []);

  return (
    <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
      <Box ref={ref}>
        <Button
          variant={pathname.startsWith(SWE_URL_ROOT) ? "contained" : "outlined"}
          component={Link}
          href={SWE_URL_ROOT}
          disableElevation
          color="coolersBlue1"
          size="small"
          startIcon={<Terminal />}
        >
          Software engineer
        </Button>
      </Box>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" className="gradient-text">
            Agustin Forero
          </Typography>
        </Box>
      </Link>
      <Box sx={{ width: biggerButtonWidth }}>
        <Button
          variant={
            pathname.startsWith(PHOTOGRAPHY_URL_ROOT) ? "contained" : "outlined"
          }
          component={Link}
          href={PHOTOGRAPHY_URL_ROOT}
          disableElevation
          color="coolersGreen1"
          size="small"
          endIcon={<Camera />}
        >
          Photographer
        </Button>
      </Box>
    </Box>
  );
}

function WebsiteHeaderLarge({ pathname }: { pathname: string }) {
  return (
    <Box sx={{ width: "fit-content" }}>
      <Typography
        variant="h1"
        className="gradient-text"
        style={{ marginBottom: theme.spacing(1) }}
      >
        Agustin Forero
      </Typography>
      <Box sx={{ display: "flex", gap: 2.5 }}>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "right" }}>
          <Button
            variant={
              pathname.startsWith(SWE_URL_ROOT) ? "contained" : "outlined"
            }
            component={Link}
            href={SWE_URL_ROOT}
            disableElevation
            color="coolersBlue1"
            startIcon={<ArrowBack />}
            size="large"
          >
            Software engineer
          </Button>
        </Box>
        <Box
          sx={{
            flex: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>and</Typography>
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "left" }}>
          <Button
            variant={
              pathname.startsWith(PHOTOGRAPHY_URL_ROOT)
                ? "contained"
                : "outlined"
            }
            component={Link}
            href={PHOTOGRAPHY_URL_ROOT}
            disableElevation
            color="coolersGreen1"
            endIcon={<ArrowForward />}
            size="large"
          >
            Photographer
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default function WebsiteHeader({ variant }: WebsiteHeaderProps) {
  const pathname = usePathname();

  switch (variant) {
    case "medium": {
      return <WebsiteHeaderMedium pathname={pathname} />;
    }
    case "large": {
      return <WebsiteHeaderLarge pathname={pathname} />;
    }
  }
}
