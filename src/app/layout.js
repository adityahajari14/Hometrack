import { Geist, Geist_Mono, DM_Sans, Noto_Sans, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hometrack Wealth Management",
  description: "Where Expertise Meets Excellence",
  openGraph: {
    title: "Hometrack Wealth Management",
    description: "Where Expertise Meets Excellence",
    images: [
      {
        url: "/logo.svg",
        width: 201,
        height: 40,
        alt: "Hometrack Wealth Management Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hometrack Wealth Management",
    description: "Where Expertise Meets Excellence",
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${notoSans.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
