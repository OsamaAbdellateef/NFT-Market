import { text } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect, useState } from "react";
import BuyButton from "./BuyButton";

const paragraph =
  "Sell your items with price and also have ability to cancel anytime from sale and edit price can work at etherum and bnb and polygon net, from sale and edit price can workd edit price can workd edit price can workd edit price can workd edit price can workd edit price can work at etherum and bnb and polygon net, from sale and edit price can work at etherum and bnb and polygon net, any network with solidity";

const NFTDetails = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="lg:p-5 slight-shadow  currency lg:gap-10  my-20  grid sm:grid-cols-1 md:grid-cols-8">
      <div className="self-center currency-img col-span-3">
        <img src="./NFT details image.png" />
      </div>
      <div className="lg:p-5 flex-col justify-be currency-details col-span-4 text-2xl font-semibold">
        <h1 className=" lg:mt-1">Beautiful Artwork </h1>
        <p className="text-base text-sky-400/50 mb-5">Collectibles</p>
        <p
          className="font-normal text-sm text-slate-400 mb-5 leading-5"
          style={{ maxWidth: "350px" }}
        >
          {showMore ? paragraph : `${paragraph.substring(0, 250)}`}
          {paragraph.length > 200 && (
            <button
              className="show-more text-normal text-white font-semibold underline ml-3"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              {showMore ? "showless" : "show more"}
            </button>
          )}
        </p>
        <div className="custom-flex-wrap flex mb-2">
          <div className="flex mr-6">
            <img className="mr-2" src="./user.png" />
            <div>
              <span className="text-sm font-normal text-slate-500">
                Owned By{" "}
              </span>
              <p className="font-normal text-sm">Account Address</p>
            </div>
          </div>
          <div className="flex">
            <img className="mr-2" src="./user.png" />
            <div>
              <span className="text-sm font-normal text-slate-500">
                Owned By{" "}
              </span>
              <p className="font-normal text-sm">Account Address</p>
            </div>
          </div>
        </div>
        <button className="text-base buynow">buy now</button>
        <button className="text-base share">share</button>
      </div>

      <div className="flex currency-price self-start mt-4 items-center flex-start">
        <img className="mr-2" src="./ethicon.png" /> <span>453</span>
      </div>
    </div>
  );
};

export default NFTDetails;
