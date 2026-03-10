// app/layout.tsx
import { Avatar } from "@mui/material";
import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Agustin Forero",
  description: "Agustin Forero: software engineer and photographer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <div className="layout">
            <main>{children}</main>
            <footer className="footer">
              {/* TODO: add Tooltip here */}
              <div className="footer-icon-container">
                <Avatar sx={{ height: 24, width: 24 }}>
                  <Image
                    src="/email.svg"
                    alt="Send email"
                    height={18}
                    width={18}
                    priority={false}
                  />
                </Avatar>
                <Avatar sx={{ height: 24, width: 24 }}>
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn profile"
                    height={14}
                    width={14}
                    priority={false}
                  />
                </Avatar>
                <Avatar sx={{ height: 24, width: 24 }}>
                  <Image
                    src="/github.svg"
                    alt="GitHub profile"
                    height={20}
                    width={20}
                    priority={false}
                  />
                </Avatar>
                <Avatar sx={{ height: 24, width: 24 }}>
                  <Image
                    src="/flickr.svg"
                    alt="Flickr profile"
                    height={20}
                    width={20}
                    priority={false}
                  />
                </Avatar>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
