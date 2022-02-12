import React from "react";

const BuyButton = ({ wide, buttonText, medium, ...props }) => {
  return (
    <div style={{ display: "inline-block" }}>
      <button
        {...props}
        div
        className={`buy-button ${wide ? "wide" : "medium"}`}
      >
        {buttonText ? buttonText : "Buy Now"}
      </button>
    </div>
  );
};

export default BuyButton;
