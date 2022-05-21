// This is temp component for story book
import Snackbar from "../components/Snackbar";
import { useState } from "react";

export const SnackbarExample = () => {
  const [showSnack, setShowSnack] = useState(false);
  const [showSnack2, setShowSnack2] = useState(false);

  // const [snackBarConfigs, setSnackbarConfigs] = useState({
  //   //separate open and close functions for closing all and opening all
  //   instance1: {
  //     open: showSnack,
  //     message: "Pop 1",
  //     type: "info",
  //     onCloseCallback: () => console.log("This is a callback"),
  //     onOpenCallback: () => {},
  //     toggleOpenCloseHandler: handleSnackbarPop,
  //   },
  //   instance2: {
  //     open: showSnack2,
  //     message:
  //       "ajsdbvkasdjsd;gjsd alsdjsjg;sjg; askdj;ksjgsjdg asjdg;asj;lgsdg alksk;jsdg;jsdg; lkahoisghoidghs",
  //     type: "error",
  //     onCloseCallback: () => {},
  //     onOpenCallback: () => {},
  //     toggleOpenCloseHandler: handleSnackbarPop2,
  //   },
  // });

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
      message: "Pop 1",
      type: "info",
      onCloseCallback: () => console.log("This is a callback"),
      onOpenCallback: () => {},
      toggleOpenCloseHandler: handleSnackbarPop,
    },
    instance2: {
      open: showSnack2,
      message:
        "ajsdbvkasdjsd;gjsd alsdjsjg;sjg; askdj;ksjgsjdg asjdg;asj;lgsdg alksk;jsdg;jsdg; lkahoisghoidghs",
      type: "error",
      onCloseCallback: () => {},
      onOpenCallback: () => {},
      toggleOpenCloseHandler: handleSnackbarPop2,
      autoHide: true,
      autoHideTimeOut: 1000,
      disableCloseOnClick: true,
    },
  };

  // const handleInfiniteRenders = () => {
  //   setSnackbarConfigs({
  //     ...snackBarConfigs,
  //     [`${Math.floor(Math.random() * 100)}`]: {
  //       open: true,
  //       message: "Pop 1",
  //       type: "info",
  //       onCloseCallback: () => this.open(false),
  //       onOpenCallback: () => {},
  //       toggleOpenCloseHandler: handleSnackbarPop,
  //     },
  //   });
  //   console.log(snackBarConfigs);
  // };

  return (
    <div>
      <button onClick={handleSnackbarPop}>Pop some snacks</button>
      <button onClick={handleSnackbarPop2}>Pop some snacks2</button>
      {/* <button onClick={handleInfiniteRenders}>Pop on click</button> */}
      <Snackbar instances={snackBarConfigs} />
    </div>
  );
};
