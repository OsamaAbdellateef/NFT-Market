import { useState, useEffect, createContext } from "react";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import { motion } from "framer-motion";
import BuyButton from "./BuyButton";

const mainData = [
  { name: "iPhone", category: "design", price: 123 },
  { name: "Nexus", category: "design", price: 25 },
  { name: "baseball", category: "entertainment", price: 144 },
  { name: "basketball", category: "entertainment", price: 180 },
  { name: "iPod Touch", category: "fashion", price: 30 },
];

export default function Home({ buttonType }) {
  const [data, setData] = useState(mainData);
  const [category, setCategory] = useState("all");
  const [priceTerm, setPriceTerm] = useState("none");

  const sortFunc = async (to, data) => {
    if (to === "up") {
      return await data.sort((a, b) => {
        return a.price - b.price;
      });
    } else {
      return await data.sort((a, b) => {
        return b.price - a.price;
      });
    }
  };

  useEffect(() => {
    const filteredData = mainData.filter((d) => d.category === category);

    if (category === "all") {
      setData(mainData);
    } else {
      setData(filteredData);
    }
  }, [category, priceTerm]);

  return (
    <div className="filter-container container  mx-auto  mt-2">
      <ul className=" mt-10 filter-list flex flex-wrap border-b border-gray-200 dark:border-gray-700">
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
        className="mt-4 grid sm-grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-4"
      >
        {data.map((d, index) => (
          <Card
            key={index}
            img={`img${index + 1}.png`}
            item={d}
            buttonType={buttonType}
          />
        ))}
      </motion.div>
    </div>
  );
}
