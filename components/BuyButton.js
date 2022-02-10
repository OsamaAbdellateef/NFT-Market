import React from "react";

const BuyButton = ({ wide, medium }) => {
  return (
    <div>
      <button div className={`buy-button ${wide ? "wide" : "medium"}`}>
        Buy Now
      </button>
    </div>
  );
};

export default BuyButton;
