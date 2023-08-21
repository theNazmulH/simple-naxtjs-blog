import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";


const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'My Blog',
  description: 'My Blog | Nazmul Hussain',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto p-2.5">
            <Header />
            <div className="children py-10 min-h-screen">
                {children}
            </div>
            <Footer />

        </div>
      </body>
    </html>
  )
}
