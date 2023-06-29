import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";
import { urlForImage } from "@/sanity/lib/image";
// import getStripe from "../lib/getStripe";

const Cart = () => {
  const cartRef = useRef();

  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
    incQty,
    decQty,
  } = useStateContext();

  // const handleCheckout = async () => {
  //   const stripe = await getStripe();

  //   const response = await fetch("/api/stripe", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(cartItems),
  //   });

  //   if (response.statusCode === 500) return;

  //   const data = await response.json();

  //   toast.loading("Redirecting...");
  //   console.log("DATA ", data);

  //   stripe.redirectToCheckout({ sessionId: data.id });
  // };

  return (
    <div
      className='w-[100vw] fixed right-0 top-0 z-30 transition-all duration-150 ease-in-out bg-black bg-opacity-50'
      ref={cartRef}
    >
      <div className='h-[100vh] w-[600px] bg-white relative float-right py-[40px] px-[10px]'>
        <button
          type='button'
          className='flex items-center text-[18px] font-medium cursor-pointer gap-[2px] ml-[10px] border-none bg-transparent'
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className='ml-[10px]'>Your Cart</span>
          <span className='ml-[10px] text-[#f02d34]'>
            ({totalQuantities} items)
          </span>
        </button>

        {cartItems.length < 1 && (
          <div className='font-semibold text-[20px] flex flex-col items-center h-full justify-center'>
            <AiOutlineShopping size={100} />
            <h3>Your shopping bag is empty</h3>
            <Link href='/' passHref>
              <button
                type='button'
                className='w-fit max-w-[400px] px-[30px] py-[10px] rounded-[15px] border-none text-[16px] mt-[10px] font-semibold uppercase bg-[#f02d34] text-white cursor-pointer
                hover:bg-[#d8292f] transition-all duration-200 ease-in-out hover:scale-[1.03]'
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className='mt-[15px] overflow-auto max-h-[70vh] py-[20px] px-[10px] md:mt-[10px]'>
          {/* {console.log(cartItems)} */}
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className='flex gap-[30px] p-[20px]' key={item._id}>
                <img
                  src={urlForImage(item?.image[0])}
                  className='max-w-[160px] min-w-[160px] h-[150px] rounded-[15px] bg-[#ebebeb] md:w-[25%] md:h-[25%]'
                />

                <div className='flex flex-col'>
                  <div className='flex justify-between w-[350px] text-[#324d67] md:w-[200px] md:mt-[30px]'>
                    <h5 className='text-[20px] md:text-[16px] text-[#324d67] font-semibold'>
                      {item.name}
                    </h5>
                    <h4 className='text-[20px] md:text-[16px] text-black font-semibold'>
                      ₹{item.price}
                    </h4>
                  </div>

                  <div className='flex justify-between w-[350px] text-[#324d67] mt-[60px] md:w-[200px] md:mt-[30px]'>
                    <div className='border-[1px] border-solid border-[#808080] padding-[6px] flex flex-row items-center '>
                      <span
                        className='text-[#f02d34] hover:bg-gray-100 text-[16px] py-[13px] px-[12px] cursor-pointer transition-all duration-250 ease-in-out'
                        onClick={() => {
                          toggleCartItemQuantity(item._id, "dec");
                        }}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span className='text-[18px] py-[6px] px-[12px] cursor-pointer border-r border-l border-gray-500'>
                        {item.quantity}
                      </span>
                      <span
                        className='text-[#31a831] hover:bg-gray-100 text-[16px] py-[12px] px-[12px] cursor-pointer transition-all duration-250 ease-in-out  '
                        onClick={() => {
                          toggleCartItemQuantity(item._id, "inc");
                        }}
                      >
                        <AiOutlinePlus />
                      </span>
                    </div>

                    <button
                      type='button'
                      className='text-[24px] text-[#f02d34] cursor-pointer bg-transparent border-none'
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {cartItems.length >= 1 && (
          <div className='absolute bottom-[20px] w-[90%] mx-auto left-0 right-0 text-center px-[65px] py-[30px] bg-[rgba(240, 45, 52, 0.3)] shadow-lg backdrop-blur-[10px] md:backdrop-blur-[4px] rounded-[10px] md:p-[30px] border-2 border-red-100'>
            <div className='flex justify-between'>
              <h3 className='text-[20px] font-semibold'>Subtotal:</h3>
              <h3 className='text-[20px] font-semibold'>₹{totalPrice}</h3>
            </div>

            <div className='w-[400px] m-auto md:w-[300px] md:m-auto'>
              <button
                type='button'
                className='w-full max-w-[400px] px-[12px] py-[10px] rounded-[15px] border-none text-[18px] mt-[10px] font-semibold uppercase bg-[#f02d34] text-white cursor-pointer
                hover:bg-[#d8292f] transition-all duration-150 ease-in-out hover:scale-[1.03]'
              >
                Pay with STRIPE
              </button>
              {/* <button type='button' className='btn' onClick={handleCheckout}>
                Pay with STRIPE
              </button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
