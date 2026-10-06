import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MotionProvider } from "@/components/MotionProvider";
import { MicrosoftClarity } from "@/components/MicrosoftClarity";

const geistSans = Geist({
  variable: "--font-sans-local",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono-local",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shantanu | Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col selection:bg-[var(--accent)] selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>
            {children}
            <MicrosoftClarity />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
