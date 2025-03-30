import "./globals.css";
import { Metadata } from "next";
import "@mantine/core/styles.css";
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from "@mantine/core";
import { ReactNode, Suspense } from "react";
import Header from "@/components/groups/header/Header";
import Footer from "@/components/groups/footer/Footer";
import { ModalProvider } from "@/components/modals/Modal";

export const metadata: Metadata = {
    title: "The Wedding Game",
    description: "Welcome to the wedding game!",
};

type Props = {
    readonly children: ReactNode;
};

export default function RootLayout(props: Props) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <Suspense>
                    <ColorSchemeScript />
                </Suspense>
            </head>

            <body>
                <MantineProvider>
                    <div className={`flex flex-col min-h-screen justify-between`}>
                        <div>
                            <Header />

                            <div className={`flex w-full justify-center items-start`}>
                                <div className={`max-w-[1200px] flex flex-row mt-10 items-start w-full sm:px-5`}>
                                    <ModalProvider>{props.children}</ModalProvider>
                                </div>
                            </div>
                        </div>

                        <Footer />
                    </div>
                </MantineProvider>
            </body>
        </html>
    );
}
