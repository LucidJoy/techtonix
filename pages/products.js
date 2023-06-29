import React, { useState } from "react";

import { client } from "@/sanity/lib/client";
import { Searchbar, Pagination, Product } from "@/components";
import { useStateContext } from "@/context/StateContext";

const Products = ({ products, bannerData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);

  const { searchbar, setSearchbar } = useStateContext();

  const lastIndex = currentPage * postsPerPage;
  const firstPost = lastIndex - postsPerPage;
  const currentPosts = products?.slice(firstPost, lastIndex);

  return (
    <div>
      <div className='my-[10px]'>
        <h1 className='text-[30px] font-semibold text-[#324D67]'>
          All Products
        </h1>
      </div>

      <Searchbar />

      <div className='mt-[50px]'>
        <div className='flex flex-row flex-wrap gap-[80px] items-center justify-center'>
          {searchbar === ""
            ? currentPosts.map((pro, idx) => (
                <Product key={idx} product={pro} />
              ))
            : products
                .filter((pro) =>
                  pro.name.toLowerCase().includes(searchbar.toLowerCase())
                )
                .map((pro, idx) => <Product key={idx} product={pro} />)}
        </div>

        <div className='text-center mt-[50px]'>
          <Pagination
            totalPosts={products.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
