// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./Home/Header";
import Footer from "./Home/Footer"; 
 
import { LoaderProvider } from "./contexts/LoaderContext";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoaderProvider>
            <Header />

            {children}

            <Footer />
          </LoaderProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
