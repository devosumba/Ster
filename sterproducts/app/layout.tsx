import { Poppins } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>Ster Consults - Bespoke Formulators</title>
                <link rel="preload" href="/assets/background-splash.svg" as="image" />
                {/* Favicon / title card image (512) requested by user */}
                <link rel="icon" href="/web-app-manifest-512x512.png" sizes="512x512" />
                <link rel="apple-touch-icon" href="/web-app-manifest-512x512.png" />
                <link rel="manifest" href="/manifest.json" />

                {/* Social preview / title card metadata */}
                <meta property="og:title" content="Ster Consults - Bespoke Formulators" />
                <meta property="og:image" content="/web-app-manifest-512x512.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Ster Consults - Bespoke Formulators" />
                <meta name="twitter:image" content="/web-app-manifest-512x512.png" />
            </head>
            <body>
                <LenisScroll />
                {children}
            </body>
        </html>
    );
}