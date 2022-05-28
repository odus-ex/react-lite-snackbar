import React from "react";

import { storiesOf } from "@storybook/react";

import { SnackbarExample } from "../examples/SnackbarExample";

const stories = storiesOf("app test", module);

stories.add("Example", () => {
  return <SnackbarExample />;
});
