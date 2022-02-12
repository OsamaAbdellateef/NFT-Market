import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

const Wrapper = ({ children }) => {
  return (
    <div className="transition duration-300 ease-in-out bg-white dark:bg-primary ">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />

      <div className="main-container sm:px-10 lg:px-20">{children}</div>
      <Footer />
    </div>
  );
};

export default Wrapper;
