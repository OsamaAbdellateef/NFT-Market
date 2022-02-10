import React from "react";

const Header = () => {
  return (
    <div className="header md:ml-16 ">
      <h1 className=" col-span-2 sm:text-3xl dark:text-white">
        Discover, Collect, and <br />
        Sell Extraordinary NFTS
      </h1>
      <p className="text-lg mt-5">
        OpenSea is the world's first and largest NFT marketplace{" "}
      </p>
      <div className="button-container mt-12">
        <button className="header-button active">Collection</button>
        <button className="header-button">Create NFT</button>
      </div>
    </div>
  );
};

export default Header;
