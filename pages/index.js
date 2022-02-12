import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Category from "../components/Category";
import Header from "../components/Header";
import TopNewest from "../components/TopNewest";
import Features from "../components/Features";
import useDarkMode from "../components/useDarkMode";

const mainData = [
  { name: "iPhone", category: "design" },
  { name: "Nexus", category: "design" },
  { name: "football", category: "entertainment" },
  { name: "baseball", category: "entertainment" },
  { name: "basketball", category: "entertainment" },
  { name: "iPod Touch", category: "fashion" },
];

export default function Home() {
  const [data, setData] = useState(mainData);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const filteredData = mainData.filter((d) => d.category === category);

    if (category === "all") {
      setData(mainData);
    } else {
      setData(filteredData);
    }
  }, [category]);
  useDarkMode();
  return (
    <div className="filter-container container mx-auto lg:px-8 ">
      <div className="background"></div>

      <Header />
      <TopNewest />
      <Features />

      <h1 className="mb-10 font-semibold text-4xl text-primary dark:text-white text">
        Explore all NFTs and Start to Collect
      </h1>

      <Category />
    </div>
  );
}

//<Category data={data} category={category} setCategory={setCategory} />
