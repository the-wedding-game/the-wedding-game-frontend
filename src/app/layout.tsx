import "./globals.css";
import {Metadata} from "next";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import {Suspense} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Wedding Game",
  description: "Welcome to the wedding game!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" {...mantineHtmlProps}>
      <head>
          <Suspense>
              <ColorSchemeScript/>
          </Suspense>
      </head>
      <body>
        <MantineProvider>
            <div className={`flex flex-col min-h-screen justify-between`}>
                <div className={`flex flex-col min-h-screen`}>
                    <Header/>
                    <div className={`flex w-full items-center justify-center`}>
                        <div className={`w-[1200px] flex flex-row items-center justify-center mt-20`}>
                            {children}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </MantineProvider>
      </body>
      </html>
  );
}
