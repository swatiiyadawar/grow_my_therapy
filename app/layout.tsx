import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "./fonts";

export const metadata: Metadata = {
  title: "Grow My Therapy",
  description: "Compassionate therapy for modern life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
