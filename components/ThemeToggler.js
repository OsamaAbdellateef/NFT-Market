import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { green } from "tailwindcss/colors";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";
const ThemeToggler = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [dark]);

  const toggleTheme = () => {
    setDark(!dark);
    console.log("dark : ", dark);
    console.log("theme");
    console.log("dark");
  };
  return (
    <button
      type="button"
      className={`p-1 rounded-full text-gray-400 ${
        theme === "dark" ? "bg-white" : "bg-gray-800"
      }`}
      onClick={() => {
        toggleTheme();
      }}
    >
      <span className="sr-only">View notifications</span>
      {dark ? (
        <MoonIcon className="h-6 w-6" aria-hidden="true" fill="white" />
      ) : (
        <SunIcon
          stroke="#fbbf24
"
          fill="#fbbf24
"
          className="h-6 w-6"
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default ThemeToggler;
