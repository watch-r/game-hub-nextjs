import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Albert_Sans as MainFont } from "next/font/google";
import "./globals.css";
import "./theme-config.css";

const mainFont = MainFont({ subsets: ["latin"], variable: "--font-main" });

export const metadata: Metadata = {
    title: "Video Games",
    description: "All the Games of the World (using rawg api)",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={mainFont.variable}>
                <ThemeProvider
                    attribute='class'
                    enableSystem
                >
                    <Theme
                        accentColor='crimson'
                        grayColor='sage'
                        radius='large'
                    >
                        {" "}
                        <NavBar />
                        <main>{children}</main>
                        {/* <ThemePanel/> */}
                    </Theme>
                </ThemeProvider>
            </body>
        </html>
    );
}
