import Link from "next/link";
import React from "react";
import TopCard from "./TopCard";

const TopNewest = () => {
  return (
    <div className="top-newest">
      <div className="flex justify-between">
        <h1 className="font-semibold text-4xl text-primary dark:text-white text responsive-header">
          Check Top Newest
        </h1>
        <Link href="categories">
          <a className="text-slate-500 underline flex items-center">
            <span className="mr-1 text-slate-500">see more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-slate-200 h-5 w-5"
              viewBox="0 0 20 20"
              fill="stroke-slate-200"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </Link>
      </div>
      <div className="top-card-container grid gap-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-9">
        <TopCard />
        <TopCard />
        <TopCard />
      </div>
    </div>
  );
};

export default TopNewest;
