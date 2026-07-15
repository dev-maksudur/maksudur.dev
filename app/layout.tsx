import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import MainLayout from "@/components/MainLayout";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Laravel Developer & PHP Software Engineer | Maksudur.dev",
    template: "%s | Maksudur.dev",
  },
  description: "Experienced Laravel Developer and PHP Software Engineer specializing in scalable web applications, payment gateway integrations, REST APIs, fintech solutions, and React. Available for freelance, contract, and remote development projects.",
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
    "Maksudur Rahman"
  ],
  authors: [{ name: "Maksudur Rahman" }],
  creator: "Maksudur Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maksudur.dev",
    title: "Laravel Developer & PHP Software Engineer | Maksudur.dev",
    description: "Experienced Laravel Developer and PHP Software Engineer specializing in scalable web applications, payment gateway integrations, REST APIs, fintech solutions, and React.",
    siteName: "Maksudur Rahman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laravel Developer & PHP Software Engineer | Maksudur.dev",
    description: "Experienced Laravel Developer and PHP Software Engineer specializing in scalable web applications, payment gateway integrations, REST APIs, fintech solutions, and React.",
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