import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from './components/Main/HeroSection/HeroSection'
import ResearchCards from './components/Main/ResearchCards/ResearchCards'
import ResearchCardlist from "./Main.json"
import TrueCarCards from './components/Main/TrueCarCards/TrueCarCards'
import ShopBrandCards from './components/Main/ShopBrands/ShopBrandCards'
import TopRatedCars from './components/Main/TopRatedCars/TopRatedCars'
import CarsReview from './components/Main/CarsReview/CarsReview'
import PeopleReview from './components/Main/PeopleReview/PeopleReview'
import Resources from './components/Main/Resources/Resources'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      {/* Hero Section */}
      <HeroSection />
      {/* Research Cards */}
      <ResearchCards Researchlist={ResearchCardlist.researchCards} />
      {/* True Cards */}
      <TrueCarCards trueCardlist={ResearchCardlist.TrueCards} />
      {/* Shop brands Cars */}
      <ShopBrandCards shopbrandlist={ResearchCardlist.BrandCards} />
      {/* Top Rated Cars  */}
      <TopRatedCars shopbrandlist={ResearchCardlist.BrandCards} />
      {/* get Cars Reviews */}
      <CarsReview shopbrandlist={ResearchCardlist.topCarsReview} />
      {/* Resources */}
      <Resources resourceslist={ResearchCardlist.resources} />
    </main>
  );
}
