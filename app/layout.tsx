import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import MainLayout from "@/components/MainLayout";
import Footer from "@/components/Footer";

import JsonLd from "@/components/JsonLd";
import { getRootSchema } from "@/lib/seo/schema";

const inter = Inter({ subsets: ["latin"] });
const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-F3KCVWE6JS";

export const metadata: Metadata = {
  metadataBase: new URL("https://maksudur.dev"),
  title: {
    default: "Laravel Developer & PHP Software Engineer | Maksudur.dev",
    template: "%s | Maksudur.dev",
  },
  description:
    "Experienced Laravel Developer & PHP Software Engineer specializing in scalable web applications, payment gateways, REST APIs, fintech solutions, and React.",
  keywords: [
    "Laravel Developer",
    "PHP Developer",
    "Software Engineer",
    "Backend Developer",
    "Laravel Freelancer",
    "PHP Freelancer",
    "Laravel API Developer",
    "Payment Gateway Developer",
    "React Laravel Developer",
    "Laravel payment gateway developer",
    "Laravel fintech developer",
    "Telegram Mini App developer",
    "Laravel API integration developer",
    "Laravel freelancer Bangladesh",
    "React Laravel freelancer",
    "Remote Laravel engineer",
    "Maksudur Rahman",
  ],
  authors: [{ name: "Maksudur Rahman" }],
  creator: "Maksudur Rahman",
  alternates: {
    canonical: "/",
  },
  other: {
    title: "Laravel Developer & PHP Software Engineer | Maksudur.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maksudur.dev",
    title: "Laravel Developer & PHP Software Engineer | Maksudur.dev",
    description:
      "Experienced Laravel Developer & PHP Software Engineer specializing in scalable web applications, payment gateways, REST APIs, fintech solutions, and React.",
    siteName: "Maksudur Rahman",
    images: [
      {
        url: "/images/maksudur.png",
        width: 1200,
        height: 630,
        alt: "Maksudur Rahman - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laravel Developer & PHP Software Engineer | Maksudur.dev",
    description:
      "Experienced Laravel Developer & PHP Software Engineer specializing in scalable web applications, payment gateways, REST APIs, fintech solutions, and React.",
    images: ["/images/maksudur.png"],
  },
  icons: {
    icon: "/images/M.D-Logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="title" content="Laravel Developer & PHP Software Engineer | Maksudur.dev" />
        <link rel="alternate" type="text/markdown" title="LLMs.txt" href="/llms.txt" />
        <JsonLd data={getRootSchema()} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'light' || (!savedTheme && !window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${inter.className} bg-white dark:bg-[#0B1120] text-slate-900 dark:text-slate-200 antialiased selection:bg-blue-500 selection:text-white`}>
        <ThemeProvider>
          <MainLayout>
            {children}
            <Footer />
            </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}