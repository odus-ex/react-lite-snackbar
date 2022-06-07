import React from "react";
import "./linearRegress.css";
const LinearRegress = (autoHideTimeOut) =>
  React.createElement("div", {
    className: `snack_regress_wrapper`,
    style: {
      animation: `regress ${autoHideTimeOut / 1000}s linear`,
    },
  });

export default LinearRegress;
