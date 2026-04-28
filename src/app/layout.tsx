import type { Metadata } from "next";
import "./globals.css";

import Header from "@/app/components/simple/Header";
import Banner from "@/app/components/simple/BannerPage/Banner";
import ClearButton from "@/app/components/ui/buttons/ClearButton/ClearButton";
import Footer from "@/app/components/simple/Footer/Footer";

export const metadata: Metadata = {
  title: "PORTFOLIO | Schegoleva Yulya",
  description: "Портфолио фронтенд-разработчика"
}
const cvLink = '/portfolio/files/schegoleva_cv.pdf'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`antialiased container pt-8 flex flex-col`}>
      <Header className={'self-center pb-16'}/>
      <Banner className={'pb-8'}/>
        {children}
      <ClearButton className={'fixed bottom-8 right-1/2 transform translate-x-1/2 z-10'} link={cvLink} />
      <Footer />
      </body>
    </html>
  );
}
