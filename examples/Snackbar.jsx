import { useEffect, useState } from "react";
// import SnackbarsContainer from "../dist/index.es.js";
import SnackbarsContainer from "../src/components/SnackbarsContainer/index";

const SnackbarExample = (props) => {
  return <SnackbarsContainer instances={props} />;
};

export default SnackbarExample;
