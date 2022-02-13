import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import Modal from "react-modal";
import ResellButton from "./ResellButton";

Modal.setAppElement("#__next");

export default function Popup({ btnText }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button className="resell-button" onClick={toggleModal}>
        {btnText}
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <form className="modal-form ">
          <div className="mb-1 flex justify-between items-center">
            <h1 className="font-semibold text-medium">⚡ Process to resell </h1>
            <FontAwesomeIcon
              onClick={toggleModal}
              className="exit-icon"
              icon={faClose}
            />
          </div>
          <p className="text-xs text-slate-600 pb-3 mt-2 mb-4 form-border">
            Please write the new price
          </p>
          <div className="mb-6">
            <div className="price-container">
              <input
                type="number"
                id="price"
                placeholder="new price"
                className="bg-primary-light price-input bg-gray-50 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span className="popup-eth flex text-sm text-slate-500 font-semibold items-center newPrice-icon">
                ETH <img className="ml-2" src="./popup-icon.png" />
              </span>
            </div>
          </div>

          <button type="submit" class="resell-button">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}
