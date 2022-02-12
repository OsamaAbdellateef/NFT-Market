import { useEffect, useState } from "react";

export default function useDarkMode() {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("light");
  }, []);
}
