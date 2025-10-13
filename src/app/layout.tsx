import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { geistSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mind Mapping Tool - Organize Ideas Smarter",
  description:
    "Create, edit, and visualize mind maps with ease. No data stored on our servers.",
  keywords: ["mind mapping", "visual thinking", "productivity", "AI mind map"],
  authors: [{ name: "Utkarsh" }],
  icons: {
    icon: "/favicon.ico", // default favicon
    apple: "/apple-touch-icon.png", // for iOS
  },
  openGraph: {
    title: "Mind Mapping Tool",
    description: "Easily create mind maps and boost productivity.",
    url: `${process.env.SITE_URL}/og-image.png`,
    siteName: "Mind Mapping Tool",
    images: [
      {
        url: `${process.env.SITE_URL}/og-image.png`,
        width: 1915,
        height: 837,
        alt: "Mind map example",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mind Mapping Tool",
    description: "Create and visualize mind maps instantly.",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
