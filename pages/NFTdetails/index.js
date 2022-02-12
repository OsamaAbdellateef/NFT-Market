import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import NFTDetailsCard from "../../components/NFTDetailsCard";
import Card from "../../components/Card";

const NFTS = [
  { name: "Beautiful Artwork", img: "img3.png" },
  { name: "Beautiful Artwork", img: "img2.png" },
  { name: "Beautiful Artwork", img: "img1.jpg" },
  { name: "Beautiful Artwork", img: "img3.png" },
  { name: "Beautiful Artwork", img: "img2.png" },
];

const NFTDetails = () => {
  return (
    <div>
      <Breadcrumb links={["home", "explore", "beautiful Artwrok"]} />
      <NFTDetailsCard />
      <h1 className="font-semibold text-4xl mb-6">
        Related Nfts Category See All
      </h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        {NFTS.map((n) => (
          <Card img={n.img} />
        ))}
      </div>
    </div>
  );
};

export default NFTDetails;
