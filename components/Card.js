import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import BuyButton from "./BuyButton";
import Popup from "./Popup";
import ResellButton from "./ResellButton";

const Card = ({ item, img, btnText, buttonType, price }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <motion.div className="nft-card" layout>
      <div className="nft-card-container">
        <div className="ntf-card-img ">
          <img src={`./img2.png`} />
        </div>
        <div className="nft-details mt-5 grid ">
          <div className="nft-name grow">
            <h1 className="text-sm ">Beautiful Artwork</h1>
            <span className="text-xs leading-none dark:text-gray-400">
              Collectibles
            </span>
          </div>
          <div className="open-icon">
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
        <div className="nft-details my-5">
          <img src="./ethicon.png" />
          <h1 style={{ color: "#3DB6CE" }} className="ml-2">
            0,045 ETH
          </h1>
        </div>
        <h1>price : {price}</h1>
        <div className="account-address my-4">
          <h1>Account Address</h1>
          <span className="text-xs">Owner</span>
        </div>
        {buttonType === "buyButton" ? (
          <BuyButton />
        ) : buttonType === "resellButton" ? (
          <ResellButton />
        ) : null}
      </div>
    </motion.div>
  );
};

export default Card;
