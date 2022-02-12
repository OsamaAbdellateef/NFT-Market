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
      className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      onClick={() => {
        toggleTheme();
      }}
    >
      <span className="sr-only">View notifications</span>
      <SunIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default ThemeToggler;
