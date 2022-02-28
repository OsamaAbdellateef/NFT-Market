import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header md:ml-16 container mx-auto ">
      <h1 className="font-semibold md:text-5xl text-primary dark:text-white">
        Discover, Collect, and
        <span className="block text-primary dark:text-white">
          {" "}
          Sell Extraordinary NFTS
        </span>
      </h1>
      <p className="text-primary dark:text-white text-lg mt-5">
        OpenSea is the world's first and largest NFT marketplace{" "}
      </p>
      <div className="button-container text-center md:text-left mt-12">
        <button className="header-button active btn-hover">
          <Link href="categories">
            <a className="w-full p-3 block">Collection</a>
          </Link>
        </button>
        <button className="header-button bg-primary btn-hover">
          <Link href="createNFT">
            <a className="width-full p-3 block ">Create NFT</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
