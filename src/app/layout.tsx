import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import LayoutWrapper from "./Components/LayoutWrapper";

const eudoxusSans = localFont({
  src: [
    {
      path: "./fonts/EudoxusSans-ExtraLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/EudoxusSans-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/EudoxusSans-Regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/EudoxusSans-Medium.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/EudoxusSans-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/EudoxusSans-ExtraBold.ttf",
      weight: "800",
      style: "bold",
    },
  ],
  variable: "--font-eudoxus-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sonses Vinç | İstanbul Vinç Kiralama | Samsun Vinç Kiralama",
    template: "%s - Sonses Vinç"
  },
  description: "İstanbul ve Samsun'da vinç kiralama hizmetleri için bizimle iletişime geçebilirsiniz.",
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${eudoxusSans.variable}`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
