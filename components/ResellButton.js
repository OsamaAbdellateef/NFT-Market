import React from "react";
import { useTheme } from "next-themes";
import Modal from "react-modal/lib/components/Modal";
import Popup from "./Popup";

const ResellButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <div style={{ textAlign: "center" }} className="buy-container">
      <Popup btnText={"Process to Resell"} />
    </div>
  );
};

export default ResellButton;
