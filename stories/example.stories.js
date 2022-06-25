import React, { useState } from "react";
import SnackbarExample from "../examples/Snackbar";
import SnackbarsContainer from "../src/components/SnackbarsContainer";

export default {
  title: "Example Stories",
};

// const [showSnack, setShowSnack] = useState(false);

const template = (args) => (
  <SnackbarsContainer instances={{ instance1: args }} />
);

export const PrimarySnack = template.bind({});

PrimarySnack.args = {
  message: "What an informative message",
  type: "info",
  open: true,
  toggleOpenCloseHandler: () => {},
  onCloseCallback: () => {},
  onOpenCallback: () => {},
};
