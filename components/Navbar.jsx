import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from ".";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, cartItems } = useStateContext();

  return (
    <div className='flex justify-between mx-6 my-18 relative'>
      <p className='text-[#808080] text-[18px]'>
        <Link href='/'>Techtonix</Link>
      </p>
      <button
        className='text-gray-500 text-[25px] text-lg cursor-pointer relative transition-transform duration-400 ease-in-out border-none bg-transparent hover:scale-105'
        type='button'
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className='absolute -top-[2px] -right-[7px] text-xs font-semibold text-white bg-red-500 w-4 h-4 rounded-full flex items-center justify-center'>
          {cartItems.length}
        </span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
