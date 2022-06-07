import React, { useEffect } from "react";
import CloseIcon from "../CloseIcon/index.js";
import LinearRegress from "../LinearRegress/index.js";
import "./snackbar.css";

const Snackbar = ({ configObject }) => {
  let {
    message,
    type,
    toggleOpenCloseHandler,
    onCloseCallback,
    onOpenCallback,
    autoHide,
    autoHideTimeOut,
    disableCloseOnClick,
    customBgColorClass,
    customTextColorClass,
  } = configObject;

  const styleTobgColorClassMap = {
    success: "bg_success",
    error: "bg_error",
    info: "bg_info",
    warning: "bg_warning",
  };

  // Manage autoHide
  useEffect(() => {
    onOpenCallback();
    if (autoHide) {
      const hideInterval = autoHideTimeOut ? autoHideTimeOut : 3000;
      setTimeout(() => handleCloseCallbacks(), hideInterval);
    }
  }, []);

  const handleCloseCallbacks = () => {
    onCloseCallback();
    toggleOpenCloseHandler();
  };

  const isCloseBtnVisible = () => {
    return !disableCloseOnClick && !autoHide;
  };

  const isRegressVisible = () => {};

  // Components
  const renderSnackMessage = () =>
    React.createElement(
      "section",
      {
        className: `snack_message_wrapper`,
      },
      message
    );

  const renderSnackCloseIcon = () =>
    isCloseBtnVisible() ? CloseIcon(handleCloseCallbacks) : null;

  const renderSnackRegress = () =>
    //conditions for linear regress

    LinearRegress(autoHideTimeOut);

  return React.createElement(
    "div",
    {
      className: `snackbar_wrapper ${
        styleTobgColorClassMap[type.toLowerCase()]
      }`,
    },
    renderSnackMessage(),
    renderSnackCloseIcon(),
    renderSnackRegress()
  );
};

export default Snackbar;
