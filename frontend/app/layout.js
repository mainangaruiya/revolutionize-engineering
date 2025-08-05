import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Revolutionize Engineering",
  description:
    "To equip engineering students with the necessary skills to thrive in the fast-evolving tech landscape by offering them opportunities to collaborate with leading industry players, work on live projects, and gain practical experience that prepares them for future employment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="flex-grow pt-16 md:pt-18 bg-black ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
