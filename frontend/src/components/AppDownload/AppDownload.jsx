import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets.js";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        Enhance your dining experience by downloading the <br />
        Laithara App today.
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
