import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from './components/Main/HeroSection/HeroSection'
import ResearchCards from './components/Main/ResearchCards/ResearchCards'
import ResearchCardlist from "./Main.json"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection />
      <ResearchCards Researchlist={ResearchCardlist.researchCards} />
    </main>
  );
}
