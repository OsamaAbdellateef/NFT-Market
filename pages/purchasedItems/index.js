import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Card from "../../components/Card";

const PurchasedItems = () => {
  return (
    <div>
      <Breadcrumb
        links={["home", "explore", "beautiful artwork", "Purchased Items"]}
      />
      <h1 className="mb-6 font-semibold text-4xl text-primary dark:text-white">
        Purchased Items
      </h1>
      <div className="flex items-center mb-4">
        <img src="./purchased-icon-sm.png" />
        <p className="ml-2 text-normal text-primary dark:text-white">
          This is a descriptive sub-headline that introduces the whole content
        </p>
      </div>
      <div className="mb-5 rounded-lg p-4 flex items-center bg-primary-light">
        <img width={50} height={50} src="./purchased-icon.png" />
        <div className="ml-4">
          <h2 className="font-semibold mb-1">Good Job</h2>
          <p className="text-sm text-sky-300">You Purchased 4 NFTS</p>
        </div>
      </div>
      <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 2].map((n) => (
          <Card
            key={Math.random()}
            img={`img${n}.png`}
            buttonText="Process to Resell"
          />
        ))}
      </div>
    </div>
  );
};

export default PurchasedItems;
