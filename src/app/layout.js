
import { Inter } from "next/font/google";
import "./globals.css";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",   // optional if you want to use CSS var
  weight: ["400", "700"],    // pick weights you need
});
export const metadata = {
  title:'Pixel Media',
  description: 'best services webseit',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased `}>
        <MenuBar/>
        <NextTopLoader color=" #ffb900"/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
