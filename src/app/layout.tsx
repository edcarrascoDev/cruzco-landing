import type { Metadata } from "next";
import { Lato, League_Spartan } from "next/font/google";
import "lite-youtube-embed/src/lite-yt-embed.css";
import "./globals.css";
import Header from "@cruzco/components/header";
import Footer from "@cruzco/components/footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const league_Spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-domine",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cruzco Constructora",
  description: "Construimos calidad y confianza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${lato.variable} ${league_Spartan.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
