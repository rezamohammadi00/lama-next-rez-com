import "@/app/_styles/globals.css";

import type { Metadata } from "next";

import { IRANSansFont } from "./_styles/fonts";
import Topbar from "./_components/Topbar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: {
    default: "رض | خانه",
    template: "%s | رض",
  },
  description: "شرکت صنعت فناوری REZ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${IRANSansFont.className} font-normal antialiased px-4 lg:px-14`}
      >
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
