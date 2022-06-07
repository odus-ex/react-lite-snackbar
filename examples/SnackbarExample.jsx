import SnackbarsContainer from "../dist/index.es.js";
// import SnackbarsContainer from "../src/components/Snackbar/SnackbarsContainer";
import { useState } from "react";

export const SnackbarExample = () => {
  const [showSnack, setShowSnack] = useState(false);
  const [showSnack2, setShowSnack2] = useState(false);

  const handleSnackbarPop = () => {
    setShowSnack(!showSnack);
  };

  const handleSnackbarPop2 = () => {
    setShowSnack2(!showSnack2);
  };

  const snackBarConfigs = {
    //separate open and close functions for closing all and opening all

    instance1: {
      open: showSnack,
      message: "What an informative message",
      type: "info",
      onCloseCallback: () => console.log("This is a callback"),
      onOpenCallback: () => {},
      toggleOpenCloseHandler: handleSnackbarPop,
    },
    instance2: {
      open: showSnack2,
      message: "Damn its an error, closing automatically",
      type: "error",
      onCloseCallback: () => {},
      onOpenCallback: () => {},
      toggleOpenCloseHandler: handleSnackbarPop2,
      autoHide: true,
      autoHideTimeOut: 4000,
      disableCloseOnClick: true,
    },
  };

  return (
    <div>
      <button onClick={handleSnackbarPop}>Pop some snacks</button>
      <button onClick={handleSnackbarPop2}>Pop some snacks2</button>
      {/* <button onClick={handleInfiniteRenders}>Pop on click</button> */}
      <SnackbarsContainer instances={snackBarConfigs} />
    </div>
  );
};
