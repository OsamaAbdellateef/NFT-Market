import React from "react";
import { useTheme } from "next-themes";

const ResellButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <div style={{ textAlign: "center" }} className="buy-container">
      <button
        onClick={() => {
          console.log(theme);
        }}
        className="btn-hover resell-button "
      >
        Resell item
      </button>
    </div>
  );
};

export default ResellButton;
