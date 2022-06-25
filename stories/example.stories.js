import React from "react";
import SnackbarsContainer from "../dist/index.js";

export default {
  title: "Example Stories",
  argTypes: {
    type: {
      options: ["info", "warning", "error", "success"],
      control: { type: "radio" },
    },
  },
};

const template = (args) => (
  <SnackbarsContainer instances={{ instance1: args }} />
);

export const PrimarySnack = template.bind({});

PrimarySnack.args = {
  message: "What an informative message!",
  type: "info",
  open: true,
  onCloseCallback: () => {},
  onOpenCallback: () => {},
  toggleOpenCloseHandler: () => {},
  autoHideTimeOut: 5000,
  disableCloseOnClick: false,
};

PrimarySnack.storyName = "Sample Snack";
