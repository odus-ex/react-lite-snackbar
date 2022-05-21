import { useCallback, useRef } from "react";
import { useGlobalContext } from "../../contexts/GlobalContext";
import "../../styles/snackbar.css";
import { Snackbar } from "./Snackbar";

export const SnackbarComponentSpace = ({
  instances = {},
  closeAll = false,
  openAll = false,
}) => {
  //derived states to avoid unintentional mutation
  let __derived_allSnacksObject = { ...instances };
  let __derived_snackQueue = Object.keys(instances).filter(
    (snackId) => __derived_allSnacksObject[snackId].open
  );

  return (
    <div className="snackbar_container">
      {__derived_snackQueue.map((snackId) => {
        return (
          <Snackbar
            key={snackId}
            configObject={__derived_allSnacksObject[snackId]}
          />
        );
      })}
    </div>
  );
};
