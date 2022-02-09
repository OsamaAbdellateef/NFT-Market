import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import { motion } from "framer-motion";

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
    <div className="filter-container container  mx-auto px-8 mt-2">
      <ul className="filter-list flex flex-wrap border-b border-gray-200 dark:border-gray-700">
        <li className="mr-2">
          <button
            href="#"
            onClick={() => {
              setCategory("all");
            }}
            className={`${
              category === "all" && "active"
            } list-button inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg`}
          >
            All
          </button>
        </li>
        <li className="mr-2">
          <button
            href="#"
            onClick={() => {
              setCategory("design");
            }}
            className={`${
              category === "design" && "active"
            } list-button inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg`}
          >
            Design
          </button>
        </li>
        <li className="mr-2">
          <button
            href="#"
            onClick={() => {
              setCategory("entertainment");
            }}
            className={`${
              category === "entertainment" && "active"
            } list-button inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg`}
          >
            Entertainment
          </button>
        </li>
        <li className="mr-2">
          <button
            href="#"
            onClick={() => {
              setCategory("fashion");
            }}
            className={`${
              category === "fashion" && "active"
            } list-button inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg`}
          >
            Fashion
          </button>
        </li>
      </ul>

      <motion.div
        animate={{ y: 30 }}
        className="mt-4 grid sm-grid-cols-2 md:grid-cols-4 gap-4"
      >
        {data.map((d) => (
          <Card key={Math.random()} item={d} />
        ))}
      </motion.div>
    </div>
  );
}
