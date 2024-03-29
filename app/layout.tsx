import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderBase from "@/components/Header/HeaderBase";
import Footer from "@/components/Footer/Footer";

const bricolage = localFont({
  src: [
    {
      path: "./fonts/Bricolage/BricolageGrotesque-ExtraLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Bricolage/BricolageGrotesque-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Bricolage/BricolageGrotesque-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Bricolage/BricolageGrotesque-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Bricolage/BricolageGrotesque-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-bricolage",
});

const spartan = localFont({
  src: [
    {
      path: "./fonts/Spartan/LeagueSpartan-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-spartan",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${spartan.variable} font-bricolage bg-beige text-brown`}>
        <HeaderBase />
        {children}
        <Footer />
      </body>
    </html>
  );
}
