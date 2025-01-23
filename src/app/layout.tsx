import type { Metadata } from "next";
import { M_PLUS_1p } from "next/font/google";
import "./globals.css";
import SideMenu from "./components/SideMenu";
import TopMenu from "./components/TopMenu";

const m_PLUS_1p = M_PLUS_1p({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "My Portforio",
  description: "ポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${m_PLUS_1p.variable} antialiased`}>
        <main className="flex flex-row">
          <SideMenu />
          <section className="pl-[300px] max-lg:pl-[140px] max-md:pl-0 w-full min-h-screen overflow-hidden">
            <TopMenu />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
