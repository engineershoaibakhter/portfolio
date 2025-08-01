import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Shoaib Akhter - Full Stack Developer & Software Engineer",
  description: "Professional portfolio of Shoaib Akhter, a skilled Full Stack Developer specializing in React, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.",
  keywords: "Full Stack Developer, Software Engineer, React, Node.js, JavaScript, TypeScript, Web Development, Portfolio",
  authors: [{ name: "Shoaib Akhter" }],
  creator: "Shoaib Akhter",
  openGraph: {
    title: "Shoaib Akhter - Full Stack Developer",
    description: "Professional portfolio showcasing innovative web solutions and cutting-edge technology implementations.",
    url: "https://shoaibakhter.dev",
    siteName: "Shoaib Akhter Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shoaib Akhter - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoaib Akhter - Full Stack Developer",
    description: "Professional portfolio showcasing innovative web solutions and cutting-edge technology implementations.",
    creator: "@shoaibakhter",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-slate-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
