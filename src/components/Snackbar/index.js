import React, { useEffect } from "react";
import "./snackbar.css";

import CloseIcon from "../CloseIcon/index.js";
import LinearRegress from "../LinearRegress/index.js";

import CONFIG from "../../config";

const Snackbar = ({ configObject }) => {
  let {
    message = "Your message comes here",
    type = "info",
    toggleOpenCloseHandler,
    onCloseCallback,
    onOpenCallback,
    autoHide = true,
    autoHideTimeOut,
    disableCloseOnClick = true,
    showRegressBar = true,
  } = configObject;

  let hideInterval =
    autoHideTimeOut >= CONFIG.minimumAutoTimeout
      ? autoHideTimeOut
      : CONFIG.defaultAutoTimeout;

  // Manage autoHide
  useEffect(() => {
    onOpenCallback();
    if (autoHide) {
      setTimeout(() => handleCloseCallbacks(), hideInterval);
    }
  }, []);

  //handlers and utility
  const handleCloseCallbacks = () => {
    onCloseCallback();
    toggleOpenCloseHandler();
  };

  const isCloseBtnVisible = () => {
    return !disableCloseOnClick;
  };

  const isRegressVisible = () => {
    return showRegressBar && autoHide;
  };

  // Components
  const renderSnackMessage = () =>
    React.createElement(
      "section",
      {
        className: `snack_message_wrapper ${
          isCloseBtnVisible() ? "" : "snack_message_wrapper__full_width"
        }`,
      },
      message
    );

  const renderSnackCloseIcon = () =>
    isCloseBtnVisible() ? CloseIcon(handleCloseCallbacks) : null;

  const renderSnackRegress = () =>
    isRegressVisible() ? LinearRegress(hideInterval) : null;

  return React.createElement(
    "div",
    {
      className: `snackbar_wrapper ${
        CONFIG.styleTobgColorClassMap[type.toLowerCase()]
      }`,
    },
    renderSnackMessage(),
    renderSnackCloseIcon(),
    renderSnackRegress()
  );
};

export default Snackbar;
