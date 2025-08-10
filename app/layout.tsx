import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/LanguageContext"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HeyLEXII - Directorio Legal de Puerto Rico",
  description:
    "Encuentra el abogado perfecto en Puerto Rico. Más de 1,247 abogados verificados, reseñas auténticas y cobertura en los 78 municipios.",
  keywords: "abogados puerto rico, directorio legal, bufetes, servicios legales, lawyers puerto rico",
  authors: [{ name: "HeyLEXII Team", url: "https://heylexii.com" }],
  creator: "HeyLEXII",
  publisher: "HeyLEXII",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://heylexii.com"),
  alternates: {
    canonical: "/",
    languages: {
      "es-PR": "/es",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "HeyLEXII - Directorio Legal de Puerto Rico",
    description: "Encuentra el abogado perfecto en Puerto Rico. Más de 1,247 abogados verificados.",
    url: "https://heylexii.com",
    siteName: "HeyLEXII",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HeyLEXII - Directorio Legal de Puerto Rico",
      },
    ],
    locale: "es_PR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HeyLEXII - Directorio Legal de Puerto Rico",
    description: "Encuentra el abogado perfecto en Puerto Rico. Más de 1,247 abogados verificados.",
    images: ["/og-image.jpg"],
    creator: "@heylexii",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HeyLEXII" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
