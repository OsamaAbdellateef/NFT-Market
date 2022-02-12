import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faAddressCard } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div>
      <div className="feature-container mt-40">
        <h1 className="mb-20 font-semibold text-4xl text-primary dark:text-white text">
          Create and sell your NFTs
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-20 sm:grid-cols-1 sm:mb-10">
          <div className="feature-card">
            <div className=" feature-icon-container mb-5 ">
              <FontAwesomeIcon
                className="text-primary dark:text-white"
                icon={faAddressCard}
              />
            </div>
            <h1 className="mb-2 text-lg text-primary dark:text-white">
              Add Your NFTs
            </h1>
            <p className=" leading-loose text-primary dark:text-gray-400 text-sm ">
              Upload your work, add a title and description, and customize your
              NFTs with properties, stats, and unlockable content
            </p>
          </div>
          <div className="feature-card">
            <div className=" feature-icon-container mb-5">
              <FontAwesomeIcon icon={faAddressCard} />
            </div>
            <h1 className="mb-2 text-lg text-primary dark:text-white">
              Add Your NFTs
            </h1>
            <p className=" leading-loose text-primary dark:text-gray-400 text-sm ">
              Upload your work, add a title and description, and customize your
              NFTs with properties, stats, and unlockable content
            </p>
          </div>
          <div className="feature-card">
            <div className=" feature-icon-container mb-5">
              <FontAwesomeIcon icon={faAddressCard} />
            </div>
            <h1 className="mb-2 text-lg text-primary dark:text-white">
              Add Your NFTs
            </h1>
            <p className=" leading-loose text-primary dark:text-gray-400 text-sm">
              Upload your work, add a title and description, and customize your
              NFTs with properties, stats, and unlockable content
            </p>
          </div>
          <div className="feature-card">
            <div className=" feature-icon-container mb-5">
              <FontAwesomeIcon icon={faAddressCard} />
            </div>
            <h1 className="mb-2 text-lg text-primary dark:text-white">
              Add Your NFTs
            </h1>
            <p className=" leading-loose text-primary dark:text-gray-400 text-sm">
              Upload your work, add a title and description, and customize your
              NFTs with properties, stats, and unlockable content
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
