import "@/styles/globals.css";

import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  IBM_Plex_Serif,
  Roboto_Mono,
} from "next/font/google";
import { cn } from "@/lib/utils";

import NavBar from "@/components/NavBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "vietnamese"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Audio Book",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        jetBrainsMono.variable,
        ibmPlexSerif.variable,
        robotoMono.variable
      )}
    >
      <body className={cn("font-sans", "antialiased")}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
