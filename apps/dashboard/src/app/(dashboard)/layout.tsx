import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster"
import LayoutBar from "@/components/Bar/LayoutBar";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({ weight: ["200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify dashboard",
  description: "A dashboard for Spotify like",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutBar>{children}</LayoutBar>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
