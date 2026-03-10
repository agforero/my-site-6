import { majorMonoDisplay, theme } from "@/app/theme";
import { PHOTOGRAPHY_URL_ROOT, SWE_URL_ROOT } from "@/utils/constants";
import { ArrowBack, ArrowForward, Camera, Terminal } from "@mui/icons-material";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useMemo, useRef, useState } from "react";

interface WebsiteHeaderProps {
  variant: "large" | "medium";
}

function WebsiteHeaderMedium({ pathname }: { pathname: string }) {
  const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));
  const ref = useRef<HTMLDivElement>(null);
  const [biggerButtonWidth, setBiggerButtonWidth] = useState<number>(0);
  useLayoutEffect(() => {
    if (ref.current) {
      const width = ref.current.offsetWidth;
      setBiggerButtonWidth(width);
    }
  }, [greaterThanMid]);

  const MemoizedSWEButton = useMemo(
    () => (
      <Box ref={ref} sx={{ marginTop: { xs: 0, md: 1 } }}>
        <Button
          variant={pathname.startsWith(SWE_URL_ROOT) ? "contained" : "outlined"}
          component={Link}
          href={SWE_URL_ROOT}
          disableElevation
          color="coolersBlue1"
          size="small"
          startIcon={<Terminal />}
        >
          {greaterThanMid ? "Software engineer" : "Coding"}
        </Button>
      </Box>
    ),
    [pathname, greaterThanMid],
  );

  const MemoizedPhotographyButton = useMemo(
    () => (
      <Box
        sx={{
          marginTop: { xs: 0, md: 1 },
          width: { xs: undefined, md: biggerButtonWidth },
        }}
      >
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
          {greaterThanMid ? "Photographer" : "Photography"}
        </Button>
      </Box>
    ),
    [pathname, greaterThanMid, biggerButtonWidth],
  );

  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          gap: { xs: 0.5, sm: 1 },
          alignItems: "center",
        }}
      >
        <Box>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <>
                <Typography
                  variant={"h3"}
                  className="gradient-text"
                  fontFamily={majorMonoDisplay.style.fontFamily}
                  textAlign="center"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  Agustin Forero
                </Typography>
                <Typography
                  variant={"h5"}
                  className="gradient-text"
                  fontFamily={majorMonoDisplay.style.fontFamily}
                  textAlign="center"
                  sx={{ display: { xs: "block", sm: "none" } }}
                >
                  Agustin Forero
                </Typography>
              </>
            </Box>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 0.5, sm: 1 },
          }}
        >
          {MemoizedSWEButton}
          {MemoizedPhotographyButton}
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: 4,
          alignItems: "center",
        }}
      >
        {MemoizedSWEButton}
        <Link href="/" style={{ textDecoration: "none" }}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              className="gradient-text"
              fontFamily={majorMonoDisplay.style.fontFamily}
              textAlign="center"
            >
              Agustin Forero
            </Typography>
          </Box>
        </Link>
        {MemoizedPhotographyButton}
      </Box>
    </>
  );
}

function WebsiteHeaderLarge({ pathname }: { pathname: string }) {
  const MemoizedSWEButton = useMemo(
    () => (
      <Button
        variant={pathname.startsWith(SWE_URL_ROOT) ? "contained" : "outlined"}
        component={Link}
        href={SWE_URL_ROOT}
        disableElevation
        color="coolersBlue1"
        startIcon={<ArrowBack />}
        size="large"
      >
        Software engineer
      </Button>
    ),
    [pathname],
  );

  const MemoizedPhotographerButton = useMemo(
    () => (
      <Button
        variant={
          pathname.startsWith(PHOTOGRAPHY_URL_ROOT) ? "contained" : "outlined"
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
    ),
    [pathname],
  );

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          className="gradient-text"
          fontFamily={majorMonoDisplay.style.fontFamily}
          style={{
            marginBottom: theme.spacing(1),
            fontSize: "clamp(2.5rem, 10vw, 4rem)",
          }}
        >
          Agustin Forero
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2.5,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box>{MemoizedSWEButton}</Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>and</Typography>
        </Box>
        <Box>{MemoizedPhotographerButton}</Box>
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
