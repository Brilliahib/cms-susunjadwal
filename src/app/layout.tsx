import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import GlobalProvider from "@/components/organisms/GlobalProvider";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} antialiased`}>
      <body>
        <GlobalProvider>
          <main className="font-poppins">{children}</main>
          <Toaster />
        </GlobalProvider>
      </body>
    </html>
  );
}