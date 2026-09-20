import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en" data-theme="proverb"   className={`${inter.variable} ${jakarta.variable}`}
>
        <body>
       <Navbar />
        <main>{children}</main>
<Footer />
      </body>
    </html>
  )
}