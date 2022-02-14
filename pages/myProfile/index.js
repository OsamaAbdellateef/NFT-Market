import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Category from "../../components/Category";

const MyProfile = () => {
  return (
    <div>
      <Breadcrumb links={["home", "myProfile"]} />
      <div className="imgs-container mb-20">
        <img className="cover-img" src="./cover.png" />
        <div className="profile-img-container">
          <img className=" profile-img " src="./profile2.png" />
        </div>
        <div className="profile-details flex justify-center items-center flex-col">
          <h1 className="text-base mb-2 text-primary dark:text-white">
            Account Address
          </h1>
          <p className="font-light text-center text-sm text-slate-800 dark:text-slate-400 mb-2">
            This is a descriptive sub-headline that introduces the whole
          </p>
          <div className="w-5 h-5 profile-icons flex justify-center">
            <img className="w-5 h-5 mr-3" src="./purchased-icon-sm.png" />
            <img src="./share.png" />
          </div>
          <div className="nft-count flex flex-col items-center">
            <span className="font-bold bg-primary text-white dark:text-primary dark:bg-white">
              01
            </span>
            <p className="text-xs font-light text-slate-500 dark:text-slate-400 mt-2 ">
              NFT Count
            </p>
          </div>
        </div>
      </div>
      <Category />
    </div>
  );
};

export default MyProfile;
