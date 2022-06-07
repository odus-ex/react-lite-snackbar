import React from "react";
import Snackbar from "../Snackbar/index.js";

const SnackbarsContainer = ({
  instances = {},
  closeAll = false,
  openAll = false,
}) => {
  //derived states to avoid unintentional mutation
  const __derived_allSnacksObject = { ...instances };
  const __derived_snackQueue = Object.keys(instances).filter(
    (snackId) => __derived_allSnacksObject[snackId].open
  );

  // Components
  const renderSnackbars = (snackID) =>
    React.createElement(Snackbar, {
      key: snackID,
      configObject: __derived_allSnacksObject[snackID],
    });

  return React.createElement(
    "div",
    {
      className: "snackbar_container",
    },
    __derived_snackQueue.map((snackId) => renderSnackbars(snackId))
  );
};

export default SnackbarsContainer;
