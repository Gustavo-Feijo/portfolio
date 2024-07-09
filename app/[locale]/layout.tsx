import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import TopBar from "@/components/TopBar";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { GlobalStateProvider } from "@/context/GlobalStateContext";
import Overlay from "@/components/Overlay";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Gustavo Feijo Porfolio",
};
export function generateStaticParams() {
  const locales = ["en", "br"];
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
    <html lang={locale == "en" ? "en" : "pt-br"} suppressHydrationWarning>
      <body
        className={cn(
          "flex flex-col transition-colors duration-1000 overflow-hidden",
          inter.className
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <GlobalStateProvider>
              <TopBar />
              <Overlay />
              {children}
            </GlobalStateProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
