import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito } from "next/font/google";
import "./globals.css";

const velaSans = localFont({
  src: [
    { path: "./fonts/VelaSans-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./fonts/VelaSans-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/VelaSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/VelaSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/VelaSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/VelaSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/VelaSans-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-vela",
});

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "600", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  icons: { icon: "/images/logo.svg" },
  title: "Большой дом — строительство и ремонт",
  description:
    "Компания «Большой дом» — профессиональное строительство, ремонт и дизайн интерьеров. Более 10 лет опыта, сотни довольных клиентов.",
  keywords: ["строительство", "ремонт", "дизайн интерьера", "Большой дом"],
  openGraph: {
    title: "Большой дом — строительство и ремонт",
    description:
      "Профессиональное строительство, ремонт и дизайн интерьеров. Звоните — сделаем!",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${velaSans.variable} ${nunito.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
