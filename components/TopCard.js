import React from "react";
import BuyButton from "./BuyButton";

const TopCard = () => {
  return (
    <div className="top-card">
      <div
        href="#"
        class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md "
      >
        <h5 class="mb-5 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Beaultiful Artwork{" "}
        </h5>

        <p class="mb-5 font-normal text-gray-700 dark:text-gray-400">
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
