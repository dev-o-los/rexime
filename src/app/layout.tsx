import { ToastProvider } from "@/components/ui/toast";
import { Analytics } from "@vercel/analytics/next";
import { Provider } from "jotai";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { geistSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "https://rexime.vercel.app"),
  title: {
    default:
      "Rexime — Modern Resume Builder | Create ATS-Friendly Professional Resumes Online",
    template: "%s | Rexime",
  },

  description:
    "Build a job-winning resume in minutes with Rexime. Fully customizable, modern templates, ATS-friendly formatting, real-time editing, and instant PDF download. No login required.",
  keywords: [
    "resume builder",
    "create resume online",
    "ATS resume checker",
    "free resume maker",
    "professional CV builder",
    "resume templates modern",
    "download resume PDF",
    "job application resume",
    "resume generator",
    "best resume format",
    "software engineer resume builder",
    "freshers resume builder",
    "one page resume",
    "minimal resume design",
    "no watermark resume builder",
  ],
  authors: [{ name: "Utkarsh" }],
  creator: "Rexime",
  publisher: "Rexime",
  alternates: {
    canonical: process.env.SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Rexime — Create Job-Winning, ATS-Friendly Resumes in Minutes",
    description:
      "Stand out in interviews with sleek, modern resume templates. Edit live, customize easily, and download instantly. No account required.",
    url: process.env.SITE_URL,
    siteName: "Rexime Resume Builder",
    images: [
      {
        url: `${process.env.SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Rexime Resume Builder Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Your Resume Online — Rexime Resume Builder",
    description:
      "Create a clean, ATS-ready resume with modern templates. Real-time editing. Instant downloads. No sign-up required.",
    images: [`${process.env.SITE_URL}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Rexime Resume Builder",
            applicationCategory: "BusinessApplication",
            operatingSystem: "All",
            description:
              "Create professional, ATS-ready resumes instantly with Rexime. Modern templates, real-time editing, and fast PDF downloads.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            url: process.env.SITE_URL,
            image: `${process.env.SITE_URL}/og-image.png`,
          })}
        </script>
      </head>
      <body
        className={`${geistSans.className} antialiased selection:bg-white/40 not-dark:selection:bg-black/55`}
      >
        <ToastProvider>
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
            <Analytics />
          </Provider>
        </ToastProvider>
      </body>
    </html>
  );
}
