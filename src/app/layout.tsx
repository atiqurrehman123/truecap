import './globals.css'
import { Inter } from 'next/font/google'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'True Car',
  description: 'It is truecar project i am done that project for my enhancing programing skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/> 
      </body>
    </html>
  );
}
