import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dedicated Emailing — Internal Communications Platform",
  description: "Dedicated Emailing unifies email, intranet messaging, and SMS into one internal communications platform — with delivery tracking, acknowledgment confirmation, and engagement analytics.",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
