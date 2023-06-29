import React from "react";
import Link from "next/link";
import Image from "next/image";

import { urlForImage } from "@/sanity/lib/image";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='px-10 py-24 bg-[#DCDCDC] rounded-[15px] relative h-[500px] leading-tight md:h-[560px] mt-[10px]'>
      <div>
        <p className='text-[20px]'>{heroBanner.smallText}</p>
        <h3 className='text-[64px] font-semibold mt-[4px] md:text-[40px]'>
          {heroBanner.midText}
        </h3>
        <h1 className='md:text-[50px] text-[160px] font-semibold text-white text-9xl ml-[-20px] uppercase'>
          {heroBanner.largeText1}
        </h1>
        {/* <div className='absolute top-0 right-20 w-72 h-72 md:w-full md:h-0 md:pt-[62%] md:-right-6/100'>
          <img
            src={urlForImage(heroBanner.image)}
            alt='headphones'
            width={72}
            height={72}
          />
        </div> */}
        <img
          src={urlForImage(heroBanner.image)}
          alt='headphone'
          className='absolute top-0 right-[20%] w-[450px] h-[450px] md:w-[77%] md:h-[66%] md:-right-[6%] md:-top-[2%]'
        />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button
              type='button'
              className='md:mt-[90px] mt-[40px] z-10 rounded-lg px-[30px] py-[10px] bg-red-600 text-white font-medium focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 hover:bg-red-700 transition-all duration-150 ease-in-out'
            >
              {heroBanner.buttonText}
            </button>
          </Link>

          <div className='absolute right-[100px] bottom-5 w-80 text-sm text-[#324d67]'>
            <h5 className='mb-3 font-bold text-base md:text-lg text-right'>
              Description
            </h5>
            <p className='text-[#5f5f5f] font-light text-[17px] text-right'>
              {heroBanner.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
