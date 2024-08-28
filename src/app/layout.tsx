import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import localFont from "next/font/local";
import { Header } from "@/widgets/Header";
import "./styles/globals.scss";
import Head from "next/head";

const SfPro = localFont({
  src: [
    {
      path: "../../public/fonts/SF-Pro.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/SF-Pro.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SF-Pro.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Halyk Zeinet - Pension Annuity Service",
  description:
    "Explore pension annuity plans with Halyk Zeinet, your trusted partner in financial security.",
  keywords:
    "Halyk Zeinet, pension annuity, financial security, retirement planning, insurance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://www.halykzeinet.kz" />
      </Head>
      <body className={SfPro.className}>
        <NextUIProvider>
          <Header />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
