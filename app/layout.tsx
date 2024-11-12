// layout.tsx
import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; 
import Footer from "./Home/Footer";

import { LoaderProvider } from "./contexts/LoaderContext";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify weights you need
});

export const metadata: Metadata = {
  title: "Kuntar School",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body className={fredoka.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LoaderProvider>
            {/* <Header /> */}

            {children}

            <Footer />
          </LoaderProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
