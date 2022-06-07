import React from "react";
import "./closeIcon.css";
const CloseIcon = (handleCloseCallbacks) =>
  React.createElement(
    "section",
    {
      className: `snack_close_wrapper`,
      onClick: handleCloseCallbacks,
    },
    React.createElement("span", {
      className: `snack_close_icon_wrapper`,
    })
  );

export default CloseIcon;
