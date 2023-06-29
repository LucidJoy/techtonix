import React from "react";
import Link from "next/link";

import { urlForImage } from "@/sanity/lib/image";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
  },
}) => {
  return (
    <div className='py-[50px] md:p-10 bg-[#F02D34] rounded-[15px] relative h-96 md:h-400 leading-1 text-white w-full mt-32 md:mt-120'>
      <div className='flex justify-between flex-wrap gap-[20px]'>
        <div className='left pl-[40px]'>
          <p className='m-[18px]'>{discount}</p>
          <h3 className='font-black text-[80px] ml-[25px]'>{largeText1}</h3>
          <h3 className='font-black text-[80px] ml-[25px] -mt-[30px]'>
            {largeText2}
          </h3>
          <p className='m-[18px]'>{saleTime}</p>
        </div>

        <div className='leading-[1.4] pr-[50px] flex flex-col justify-center mb-[20px]'>
          <p className='text-[18px]'>{smallText}</p>
          <h3 className='font-extrabold text-[60px]'>{midText}</h3>
          <p className='text-[18px]'>{desc}</p>

          <Link href={`/product/${product}`}>
            <button
              type='button'
              className='rounded-[15px] px-4 py-2 bg-white text-red-500 border-none mt-10 text-lg font-medium cursor-pointer'
            >
              {buttonText}
            </button>
          </Link>
        </div>

        <img
          src={urlForImage(image)}
          className='absolute -top-[25%] left-[25%]'
        />
      </div>
    </div>
  );
};

export default FooterBanner;
