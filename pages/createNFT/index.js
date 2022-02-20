import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";

const CreatNFT = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [currentImageName, setCurrentImageName] = useState("");

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setSelectedImage(reader.result);
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setCurrentImageName(e.target.files[0].name);
    }
  };
  useEffect(() => {
    // create the preview
    console.log(selectedImage);
  }, []);

  return (
    <div>
      <Breadcrumb links={["explore", "createNFT"]} />

      <div className=" py-4 ">
        {/*Form*/}
        <h1 className="mb-6 font-semibold text-4xl text-primary dark:text-white responsive-header">
          Create Your NFT
        </h1>
        <p className="mb-8 text-primary dark:text-white">
          This is a descriptive sub-headline that introduces the whole content
        </p>

        <form>
          <div className=" grid xs:grid-cols-1 md:grid-cols-2 gap-40 items-center">
            <div className="">
              <div className="mb-6">
                <label
                  htmlFor="NFT-title"
                  className="block mb-2 text-sm font-medium text-primary dark:text-white "
                >
                  NFT Title
                </label>
                <input
                  type="text"
                  id="NFT-title"
                  className="bg-primary-light  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                  text-white  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-primary dark:text-white"
              >
                Chose Category
              </label>
              <select
                id="countries"
                className="bg-primary-light mb-6 bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>

              <div className="mb-6">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Price
                </label>
                <div className="price-container">
                  <input
                    type="number"
                    id="price"
                    className="bg-primary-light price-input bg-gray-50 border
                    text-white border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <span className="eth">ETH</span>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-primary dark:text-white ">
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

                    <div className="flex justify-center text-sm text-gray-600">
                      <label
                        style={{
                          background: "none",
                        }}
                        htmlFor="file-upload"
                        className="test relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500  "
                      >
                        <span
                          style={{
                            fontWeight: "bold",
                            textDecoration: "underline",
                          }}
                          className="upload-img-button "
                        >
                          Upload an image
                        </span>
                        <input
                          onChange={imageHandler}
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                    </div>
                    <p className="text-md ">
                      {currentImageName && currentImageName}
                    </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
                {selectedImage && (
                  <div className="mb-20">
                    <img src={selectedImage} alt="Thumb" />{" "}
                  </div>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="bg-primary-light block p-2.5 w-full text-sm text-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 row-span-6 col-span-6 "
                  placeholder="Leave a comment..."
                ></textarea>
                <input
                  className="cursor-pointer mt-6 submit-button"
                  type="submit"
                />
              </div>
            </div>
            {/**/}
            <div className="slider">
              <div className="slider-container">
                <div className="slider-img-box img-1">
                  <div className="slider-details">
                    <h1 className="font-extrabold mb-2">Abstr Gradient NFT</h1>
                    <p>
                      <img
                        className=" mr-4 gorup-icon"
                        src="./group-icon.png"
                      />{" "}
                      <span className="font-medium">4363733</span>
                    </p>
                  </div>
                  <img className="slider-item" src="./slider2.png" />
                  <img className="group-icon" src="./group.png" />
                  <div className="lower-part">
                    <div className="left-part">
                      <span className="font-normal text-xs">Current bid</span>
                      <p>
                        <img
                          style={{ display: "inline-block" }}
                          src="./vector.png"
                          className="mr-1 "
                        />
                        <span className="font-semibold">0.25 ETH</span>
                      </p>
                    </div>
                    <div className="right-part">
                      <span className="font-normal text-xs">Ends in</span>
                      <p>
                        <span className="font-semibold mr-1">
                          12
                          <span className="font-light">h</span>
                        </span>
                        <span className="font-semibold mr-1">
                          43
                          <span className="font-light">m</span>
                        </span>
                        <span className="font-semibold mr-1">
                          42
                          <span className="font-light">s</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slider-img-box img-2">
                  <img className="slider-item" src="./slider1.png" />
                </div>
                <div className="slider-img-box img-3">
                  <img className="slider-item" src="./slider3.png" />
                </div>
              </div>
            </div>
            {/**/}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatNFT;
