import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='text-[#324d67] text-center mt-20 py-30 px-10 font-bold flex flex-col items-center gap-[10px] justify-center'>
      <p>2022 Techtonix | All rights reserved</p>
      <p className='flex gap-[10px] text-[30px]'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
