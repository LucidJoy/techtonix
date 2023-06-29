import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { client } from "@/sanity/lib/client";
import { Product, HeroBanner, FooterBanner } from "@/components";

export default function Home({ products, bannerData }) {
  const [sanityProducts, setSanityProducts] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const names = products.map((pro) => console.log(pro.name));
  }, []);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className='text-center my-10 text-[#324d67]'>
        <h2 className='text-[40px] font-bold'>Best selling products</h2>
        <p className='text-[16px] font-light'>Speakers of many variations</p>
      </div>

      <div className='flex flex-wrap justify-center gap-6 mt-5'>
        {products
          .map((product) => <Product key={product._id} product={product} />)
          .slice(0, 4)}
      </div>

      <div
        className='w-full flex items-center justify-center mt-[50px] text-[16px] font-semibold cursor-pointer'
        onClick={() => router.push("/products")}
      >
        <p className='w-fit border-[2px] border-gray-500 px-[30px] py-[10px] hover:bg-gray-100 transition-all duration-200 ease-in-out'>
          See more
        </p>
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
