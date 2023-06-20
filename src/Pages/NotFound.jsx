import React from "react";
import NotFound from "../images/404.png"

import Header from "../components/Header";
import Footer from "../components/Footer";

const NoMatch = () => {
  return (
    <div className="errorNotFoundImage">
      <img src={NotFound} alt="" />
    </div>
  );
};

export default NoMatch;
