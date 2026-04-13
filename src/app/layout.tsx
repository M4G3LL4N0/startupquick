import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StartupQuick",
  description:
    "Build premium startup websites in minutes. Turn ideas into polished launch pages, investor-ready summaries, and live subdomains instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
