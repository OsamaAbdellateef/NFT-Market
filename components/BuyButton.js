import Link from "next/link";
import React from "react";

const BuyButton = ({ wide, buttonText, medium, ...props }) => {
  return (
    <div
      style={{ display: "inline-block", width: "100%", textAlign: "center" }}
    >
      <Link href="NFTdetails">
        <button
          {...props}
          div
          className={`buy-button font-light text-sm ${
            wide ? "wide" : "medium"
          }`}
        >
          {buttonText ? buttonText : "⚡ Buy Now"}
        </button>
      </Link>
    </div>
  );
};

export default BuyButton;
