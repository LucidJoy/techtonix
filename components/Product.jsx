import React from "react";
import Link from "next/link";

import { urlForImage } from "@/sanity/lib/image";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='cursor-pointer transform transition duration-500 ease-in-out text-[#324d67] hover:scale-105 bg-[#ebebeb] rounded-[15px] p-[15px] min-h-[300px] flex flex-col items-start justify-between'>
          <img
            src={urlForImage(image && image[0])}
            className='rounded-[15px] w-[250px] h-[250px] transform object-cover transition duration-500 ease-in-out hover:scale-105 bg-white truncate'
          />

          <div>
            <p className='font-medium mt-[20px]'>{name}</p>
            <p className='font-bold mt-[5px] text-black '>₹{price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
