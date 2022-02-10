import Head from "next/head";
import React from "react";
import Navbar from "./navbar/Navbar";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      {children}
      <footer></footer>
    </div>
  );
};

export default Wrapper;
