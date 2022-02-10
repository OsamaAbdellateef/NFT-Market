import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Category from "../components/Category";
import Header from "../components/Header";
import TopNewest from "../components/TopNewest";
import Features from "../components/Features";

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

  return (
    <div className="filter-container container    mx-auto px-8 md:ml-16">
      <Header />
      <TopNewest />
      <Features />
      <Category />
    </div>
  );
}

//<Category data={data} category={category} setCategory={setCategory} />
