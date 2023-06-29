import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return router.pathname.startsWith("/studio") ? (
    <>
      <div>{children}</div>
    </>
  ) : (
    <div className='p-[10px]'>
      <Head>
        <title>Techtonix Local</title>
        <meta name='description' content='Ecommerce app with best rates!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        <Navbar />
      </header>

      <main className='max-w-[85rem] mx-auto w-full'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
