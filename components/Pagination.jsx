import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className='join'>
      {pages.map((page, index) => {
        return (
          <button
            className={`btn border-[2px] w-[40px] h-[40px] border-[#585859] hover:bg-gray-100 transition-all ease-in-out duration-300 text-black mr-[10px]`}
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
