import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SheetProvider } from "@/context/sheet-context";
import { GlobalSheet } from "@/components/global-sheet";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://grow-with-sahaib.vercel.app',
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@sahaib',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <SheetProvider>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col min-h-screen">
              <Navbar />
              <div className="h-28" />
              <main className="flex-grow">
                <div className="container mx-auto max-w-7xl px-6">
                  {children}
                </div>
              </main>
              <Footer />
              <footer className="w-full flex items-center justify-center py-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://twitter.com/sahaib"
                  title="Sahaib's Twitter"
                >
                  <span className="text-default-600">Created by</span>
                  <p className="text-primary">AI with Devs Team</p>
                </Link>
              </footer>
            </div>
            <GlobalSheet />
          </Providers>
        </SheetProvider>
      </body>
    </html>
  );
}
