import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SentimentRoute — Route support tickets by emotional urgency",
  description:
    "Analyze customer feedback sentiment and automatically route angry customers to senior support agents. Monitor trends and improve response times."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="6b391954-9b8e-4f98-9b3b-a3bf7224aabf"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
