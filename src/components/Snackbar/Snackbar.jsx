import { useEffect } from "react";
import "../../styles/snackbar.css";

export const Snackbar = ({ configObject }) => {
  let {
    message,
    type,
    customBgColorClass,
    toggleOpenCloseHandler,
    onCloseCallback,
    onOpenCallback,
    customTextColorClass,
    autoHide,
    autoHideTimeOut,
    disableCloseOnClick,
  } = configObject;
  const styleToColorClassMap = {
    success: "bg_success",
    info: "bg_info",
    error: "bg_error",
    custom: customBgColorClass,
  };

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

  return (
    <div
      className={`snackbar_wrapper ${styleToColorClassMap[type.toLowerCase()]}`}
    >
      <section
        className={`snack_message_wrapper ${
          type.toLowerCase() === "custom" && customTextColorClass
        }`}
      >
        {message}
      </section>
      {/* only allow hiding close btn when autohide enabled */}
      {isCloseBtnVisible() && (
        <section
          className="snack_close_wrapper "
          onClick={handleCloseCallbacks}
        >
          {/* custom CSS cross icon */}
          <span className="snack_close_icon_wrapper"></span>
        </section>
      )}
    </div>
  );
};
