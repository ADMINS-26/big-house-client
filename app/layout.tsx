import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
