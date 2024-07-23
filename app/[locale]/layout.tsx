import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { GlobalStateProvider } from "@/context/GlobalStateContext";
import ThemeProvider from "@/components/ThemeProvider";
import Overlay from "@/components/Overlay";
import TopBar from "@/components/TopBar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { locales } from "@/config";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Gustavo Feijo",
  description: "Gustavo Feijo's Portfolio",
  authors: [{ name: "Gustavo Feijo" }],
  creator: "Gustavo Feijo",
  robots: { index: true, follow: true },
  keywords: [
    "Gustavo",
    "Feijo",
    "Portfolio",
    "Dev",
    "Programador",
    "Desenvolvedor",
  ],
  openGraph: {
    type: "website",
    title: "Portfolio - Gustavo Feijo",
    description: "Gustavo's Feijo Portfolio",
    url: "https://gustavofeijo.vercel.app/br",
  },
  twitter: {
    title: "Portfolio - Gustavo Feijo",
    description: "Gustavo's Feijo Portfolio",
    creator: "Gustavo Feijo",
    site: "https://gustavofeijo.vercel.app/br",
  },
};
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  //Get the messages for the locales.
  const messages = await getMessages();
  return (
    <html lang={locale == "en" ? "en" : "pt-BR"} suppressHydrationWarning>
      <body
        className={cn(
          "flex flex-col transition-colors duration-1000 overflow-hidden",
          inter.className
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <GlobalStateProvider>
              <TopBar />
              <Overlay />
              {children}
            </GlobalStateProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
