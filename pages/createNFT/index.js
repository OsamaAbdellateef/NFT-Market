import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthernet } from "@fortawesome/free-solid-svg-icons";

const CreatNFT = () => {
  return (
    <div>
      <Breadcrumb links={["home", "createNFT"]} />

      <div className="py-4 ">
        {/*Form*/}
        <h1 className="mb-6 font-semibold text-4xl">Create Your NFT</h1>
        <p className="mb-8">
          This is a descriptive sub-headline that introduces the whole content
        </p>

        <form>
          <div className=" grid xs:grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div class="mb-6">
                <label
                  for="NFT-title"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  NFT Title
                </label>
                <input
                  type="text"
                  id="NFT-title"
                  class="bg-primary-light border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-white"
              >
                Chose Category
              </label>
              <select
                id="countries"
                class="bg-primary-light mb-6 bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>

              <div class="mb-6">
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Price
                </label>
                <div className="price-container">
                  <input
                    type="number"
                    id="price"
                    class="bg-primary-light price-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <span className="eth">ETH</span>
                </div>
              </div>
              <div class="mb-6">
                <label
                  for="seller"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Seller
                </label>
                <input
                  type="text"
                  id="seller"
                  class="bg-primary-light border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="mb-6">
                <label
                  for="creator"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Creator
                </label>
                <input
                  type="text"
                  id="creator"
                  class="bg-primary-light border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            {/**/}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                upload photo
              </label>
              <div className="bg-primary-light mt-1 mb-8 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      style={{ background: "none" }}
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                        }}
                      >
                        Upload a file
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                class="bg-primary-light block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 row-span-6 col-span-6 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            {/**/}
          </div>

          <input className="cursor-pointer mt-6 submit-button" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default CreatNFT;
