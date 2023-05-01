import React from 'react'
import Link from 'next/link'
function HeroLinks() {
  return (
    <div className=' mt-6 mb-10 pb-7 flex justify-center md:mb-5 mb-11 md:pt-3 md:pb-3'>
      <Link
        className="text-white underline-offset-8 underline mr-2 pb-1 hover:text-neutral-600"
        href={"/shop/new"}
      >
        Shop New
      </Link>
      <Link
        className="text-white underline-offset-8 underline ml-2 pb-1 hover:text-neutral-600"
        href={"/used-cars-for-sale"}
      >
        Shop Used
      </Link>
    </div>
  );
}

export default HeroLinks