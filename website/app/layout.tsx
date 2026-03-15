import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EmotionLens — Evidence-Based Emotion Recognition Training",
  description:
    "Master the science of reading facial expressions. Professional training in micro-expression recognition, FACS coding, and emotional intelligence — backed by research, designed for practitioners.",
  keywords: [
    "micro-expression training",
    "FACS",
    "emotion recognition",
    "facial action coding system",
    "emotional intelligence",
    "Paul Ekman alternative",
    "body language",
    "behavioral intelligence",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
