import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AITutor } from "@/components/AITutor";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIM3002P — Fundamentals of Generative AI | Course Portal",
  description:
    "University Course Learning Portal for AIM3002P Fundamentals of Generative Artificial Intelligence. Access modules, notes, labs, projects, important questions, and resources.",
  keywords: [
    "generative AI",
    "AIM3002P",
    "course portal",
    "university",
    "GANs",
    "VAEs",
    "diffusion models",
    "prompt engineering",
    "LLM fine-tuning",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <AITutor />
        </ThemeProvider>
      </body>
    </html>
  );
}
