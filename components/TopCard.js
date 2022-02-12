import React from "react";
import BuyButton from "./BuyButton";

const TopCard = () => {
  return (
    <div
      className="top-card text-primary"
      style={{ backgroundImage: "./top.png" }}
    >
      <div
        href="#"
        className="block p-6 max-w-sm bg-primary dark:bg-white  rounded-lg border border-gray-200 shadow-md "
      >
        <h5 className="mb-5 text-2xl font-semibold tracking-tight text-white dark:text-primary text">
          Beaultiful Artwork{" "}
        </h5>

        <p className="mb-5 font-semibold text-gray-700 dark:text-primary">
          Collectibles
        </p>
        <div className="mb-10 top-card-img-container">
          <img src="./top-card.png" className="top-card-img" />
        </div>
        <BuyButton wide />
      </div>
    </div>
  );
};

export default TopCard;
