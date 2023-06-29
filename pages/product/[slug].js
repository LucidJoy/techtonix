import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import { urlForImage } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { Product } from "../../components";
import { useStateContext } from "@/context/StateContext";

const ProductDetails = ({ product, products }) => {
  const [index, setIndex] = useState(0);
  const { name, image, details, price } = product;
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <div>
      <div className='flex gap-[40px] m-[40px] mt-[60px] text-[#324d67] md:flex-wrap md:m-[20px]'>
        <div>
          <div className='image-container'>
            <img
              src={urlForImage(image && image[index])}
              className='rounded-[15px] bg-[#ebebeb] w-[400px] h-[400px] transition duration-300 ease-in-out md:w-[350px] md:h-[350px] hover:bg-[#f02d34] cursor-default'
            />
          </div>

          <div className='flex flex-row gap-[10px] mt-[20px]'>
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlForImage(item)}
                className={
                  i === index
                    ? "rounded-[8px] w-[70px] h-[70px] cursor-pointer border-[2px] border-[#f02d34] shadow-xl shadow-gray-300"
                    : "rounded-[8px] bg-[#ebebeb] w-[70px] h-[70px] cursor-pointer border-[2px] border-white"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className='product-detail-desc'>
          <h1 className='text-[#324d67] font-bold text-[30px]'>{name}</h1>
          <div className='text-[#f02d34] flex gap-[5px] items-center'>
            <div className='flex flex-row'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>

            <p className='text-[#324d67]'>(20)</p>
          </div>

          <h4 className='mt-[15px] text-[16px] text-[#324d67] font-bold'>
            Details:
          </h4>
          <p className='mt-[2px]'>{details}</p>
          <p className='font-bold text-[26px] mt-[30px] text-[#f02d34]'>
            ₹{price}
          </p>

          <div className='flex gap-[20px] mt-[10px] items-center'>
            <h3 className='font-bold text-[#324d67] text-[20px]'>Quantity:</h3>
            <p className='border border-[#808080] flex items-center '>
              <span
                className='text-[#f02d34] text-[16px] py-[16px] px-[12px] cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in-out'
                onClick={decQty}
              >
                <AiOutlineMinus />
              </span>
              <span className='num text-[18px] py-[10px] px-[14px] cursor-pointer border-x border-[#808080]'>
                {qty}
              </span>
              <span
                className='plus text-[16px] py-[16px] px-[14px] cursor-pointer h-[100%] hover:bg-gray-100 transition-all duration-200 ease-in-out'
                onClick={incQty}
              >
                <AiOutlinePlus />
              </span>
            </p>
          </div>

          <div className='flex gap-[30px]'>
            <button
              className='py-[10px] px-[20px] border border-[#f02d34] mt-[40px] font-medium bg-white text-[#f02d34] cursor-pointer w-[200px] transition-all hover:scale-105 duration-500 ease text-[18px]'
              type='button'
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button
              className='py-[10px] px-[20px] border border-[#f02d34] mt-[40px] font-medium bg-[#f02d34] text-[#fff] cursor-pointer w-[200px] transition-all hover:scale-105 duration-500 ease text-[18px]'
              type='button'
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current 
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
