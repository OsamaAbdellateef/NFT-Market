import { useState, useEffect, createContext } from "react";
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import { motion } from "framer-motion";
import BuyButton from "./BuyButton";
import Link from "next/link";

const mainData = [
  { name: "iPhone", category: "design", price: 123 },
  { name: "Nexus", category: "design", price: 25 },
  { name: "baseball", category: "entertainment", price: 144 },
  { name: "basketball", category: "entertainment", price: 180 },
  { name: "iPod Touch", category: "fashion", price: 30 },
];

export default function Category({ buttonType, seeAll, link }) {
  const [data, setData] = useState(mainData);
  const [category, setCategory] = useState("all");
  const [priceTerm, setPriceTerm] = useState("none");

  useEffect(() => {
    console.log("current category : ", category);
    var filteredData = [];
    if (category !== "all") {
      filteredData = mainData.filter((d) => d.category === category);
      if (priceTerm === "none") {
        setData(filteredData);
      } else if (priceTerm === "high") {
        setData(
          [...filteredData].sort((a, b) => {
            return b.price - a.price;
          })
        );
      } else {
        setData(
          [...filteredData].sort((a, b) => {
            return a.price - b.price;
          })
        );
      }
    } else {
      if (priceTerm === "none") {
        setData(mainData);
      } else if (priceTerm === "high") {
        setData(
          [...mainData].sort((a, b) => {
            return b.price - a.price;
          })
        );
      } else {
        setData(
          [...mainData].sort((a, b) => {
            return a.price - b.price;
          })
        );
      }
    }
  }, [category, priceTerm]);

  return (
    <div className="filter-container mt-5 xs:mt-6">
      <ul className=" mt-10 filter-list flex flex-wrap justify-center border-b border-gray-200 dark:border-gray-700">
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
      <div className="flex justify-center">
        <select
          onChange={(e) => {
            console.log(e.target.value);
            setPriceTerm(e.target.value);
          }}
          id="countries"
          className="basis-60 bg-primary-light my-6 bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                 dark:border-gray-600 dark:placeholder-gray-400  "
        >
          <option value="none">default</option>
          <option value="high">highest</option>
          <option value="low">lowest</option>
        </select>
      </div>
      {seeAll ? (
        <div className="seeAll text-right">
          <Link href={`${link}`}>
            <a
              className="text-slate-500
          hover:text-slate-800 hover:dark:text-slate-200 transition underline"
            >
              See all{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline h-6 w-6 slate-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#475569"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </Link>
        </div>
      ) : null}
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
            price={d.price}
          />
        ))}
      </motion.div>
    </div>
  );
}
