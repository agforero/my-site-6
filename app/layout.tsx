// app/layout.tsx
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
              <div className="footer-icon-container">
                <Image
                  src="/email.svg"
                  alt="Send email"
                  height={20}
                  width={20}
                  priority={false}
                />
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn profile"
                  height={20}
                  width={20}
                  priority={false}
                />
                <Image
                  src="/github.svg"
                  alt="GitHub profile"
                  height={20}
                  width={20}
                  priority={false}
                />
                <Image
                  src="/flickr.svg"
                  alt="Flickr profile"
                  height={20}
                  width={20}
                  priority={false}
                />
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
