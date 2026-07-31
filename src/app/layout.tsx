import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ShaderBackground } from "@/components/ui/ShaderBackground";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { BackToTop } from "@/components/ui/BackToTop";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PERSONAL_INFO } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b1326",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://parmarrajnish744.github.io"),
  title: {
    default: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.roleTitle}`,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description: PERSONAL_INFO.bioShort,
  keywords: [
    "Parmar Rajnesh",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Flutter Mobile Engineer",
    "WordPress Developer",
    "WebGL Shader Developer",
    "Tailwind CSS",
    "Gujarat India Developer",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: "https://parmarrajnish744.github.io" }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parmarrajnish744.github.io",
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.roleTitle}`,
    description: PERSONAL_INFO.bioShort,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    images: [
      {
        url: PERSONAL_INFO.avatarUrl,
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} - Senior Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.roleTitle}`,
    description: PERSONAL_INFO.bioShort,
    images: [PERSONAL_INFO.avatarUrl],
    creator: "@parmarrajnesh",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.roleTitle,
    url: "https://parmarrajnish744.github.io",
    image: PERSONAL_INFO.avatarUrl,
    sameAs: [
      PERSONAL_INFO.socials.github,
      PERSONAL_INFO.socials.linkedin,
      PERSONAL_INFO.socials.twitter,
    ],
    knowsAbout: [
      "Software Engineering",
      "Web Development",
      "Mobile App Development",
      "React",
      "Next.js",
      "Flutter",
      "TypeScript",
      "Node.js",
      "WebGL",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-on-background antialiased selection:bg-primary/30 min-h-screen relative overflow-x-hidden font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LoadingScreen />
          <ScrollProgress />
          <CustomCursor />
          <ShaderBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
