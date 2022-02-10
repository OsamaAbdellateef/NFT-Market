import React from "react";
import TopCard from "./TopCard";

const TopNewest = () => {
  return (
    <div className="top-newest">
      <h1 className="font-semibold text-4xl">The Top Newest</h1>
      <div className="top-card-container grid gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-9">
        <TopCard />
        <TopCard />
        <TopCard />
      </div>
    </div>
  );
};

export default TopNewest;
