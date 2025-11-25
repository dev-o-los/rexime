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
      "Rexime – Modern Resume Builder | Create ATS-Friendly Resumes Online",
    template: "%s | Rexime",
  },

  description:
    "Rexime is a modern and fast online resume builder that helps you create ATS-friendly, professional resumes in minutes. Choose from clean templates, edit in real time, and download instantly — no login required.",

  keywords: [
    // Strong brand keywords
    "rexime resume builder",
    "rexime cv builder",
    "rexime online resume maker",
    "rexime ats resume",
    "rexime resume generator",

    // Resume keywords
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
    "freshers resume builder",
    "software engineer resume builder",
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
    title: "Rexime – Create Job-Winning, ATS-Friendly Resumes in Minutes",
    description:
      "Build elegant, ATS-ready resumes with Rexime. Edit live, customize easily, and download instantly. No login required.",
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
    title: "Rexime – Modern Online Resume Builder",
    description:
      "Create a clean, ATS-friendly resume in minutes with Rexime. Real-time editing, professional templates, and instant PDF downloads.",
    images: [`${process.env.SITE_URL}/og-image.png`],
    creator: "@utkarshdev_",
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
        <meta
          name="google-site-verification"
          content="beOb8EHGtM_t7mW3kofi6jec_DNOWWwlFZqYAy6dg94"
        />
        {/* JSON-LD for SEO */}
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
            sameAs: ["https://twitter.com/utkarshdev_"],
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
