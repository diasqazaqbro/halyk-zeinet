import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import localFont from "next/font/local";
import { Header } from "@/widgets/Header";
import "./styles/globals.scss";

const SfPro = localFont({
  src: "../../public/fonts/SF-Pro.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Пенсионный аннуитет в Казахстане - Как оформить и получить выгоды",
  description: "Узнайте, что такое пенсионный аннуитет в Казахстане, как его оформить и получить максимальные выгоды. Полная информация и советы.",
  keywords: ["пенсионный аннуитет", "досрочное снятие денег с ЕНПФ", "перевод пенсии в страховую", "бонусы страховой компании", "пенсионные накопления"],
  openGraph: {
    title: "Пенсионный аннуитет в Казахстане - Как оформить и получить выгоды",
    description: "Узнайте, что такое пенсионный аннуитет в Казахстане, как его оформить и получить максимальные выгоды. Полная информация и советы.",
    url: "https://halykzeinet.kz/",
    siteName: "Halyk Zeinet",
    images: [
      {
        url: 'https://halykzeinet.kz/_next/image?url=%2FLaura.webp&w=3840&q=75',
        width: 800,
        height: 600,
        alt: 'Пенсионный аннуитет в Казахстане',
      },
    ],
    locale: 'ru',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Пенсионный аннуитет в Казахстане - Как оформить и получить выгоды",
    description: "Узнайте, что такое пенсионный аннуитет в Казахстане, как его оформить и получить максимальные выгоды. Полная информация и советы.",
    images: ["https://halykzeinet.kz/_next/image?url=%2FLaura.webp&w=3840&q=75"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={SfPro.className}>
        <NextUIProvider>
          <Header />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
