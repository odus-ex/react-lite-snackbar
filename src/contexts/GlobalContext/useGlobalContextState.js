import { useEffect, useState } from "react";

//a place to manage all snackbars, eg. close all snackbar operation
export const useGlobalContextState = () => {
  //create state copies for every snackbar
  const [closeAll, setCloseAll] = useState();
  const [openAll, setOpenAll] = useState();

  //helpers and handlers
  const enqueue = () => {};

  const dequeue = () => {};

  const peek = () => {};

  return {
    closeAll,
  };
};
