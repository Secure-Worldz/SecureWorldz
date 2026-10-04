import type React from "react"
import type { Metadata } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "SECUREWORLDZ — Products Built by People Who Build Tech",
  description:
    "Cybersecurity training, tools, labs, services and community for students and clients. Practical learning, VAPT, AI security, and DRAGOZ community.",
  keywords: [
    "SECUREWORLDZ",
    "cybersecurity training",
    "cybersecurity tools",
    "security labs",
    "VAPT",
    "web security",
    "AI security",
    "workshops",
    "DRAGOZ community",
  ],
  authors: [{ name: "SECUREWORLDZ Team" }],
  creator: "SECUREWORLDZ",
  publisher: "SECUREWORLDZ",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400&display=swap" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
