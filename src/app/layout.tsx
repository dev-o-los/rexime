import { ToastProvider } from "@/components/ui/toast";
import { Analytics } from "@vercel/analytics/next";
import { Provider } from "jotai";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { geistSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rexime — Modern Resume Builder",
  description:
    "Create stunning, professional resumes effortlessly with Rexime. Choose modern templates, edit in real time, and download instantly. No data stored on servers.",
  keywords: [
    "resume builder",
    "cv builder",
    "professional resume",
    "job application",
    "resume templates",
    "ATS friendly resume",
    "online resume creator",
  ],
  authors: [{ name: "Utkarsh" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Rexime — Create Your Professional Resume Online",
    description:
      "Design modern, ATS-friendly resumes in minutes. Fully responsive, sleek templates, and instant downloads.",
    url: process.env.SITE_URL,
    siteName: "Rexime",
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
    title: "Rexime — Modern Resume Builder",
    description:
      "Create beautiful, job-winning resumes instantly with responsive templates and real-time editing.",
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
