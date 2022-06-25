A very light weight component to add notifications to your Javascript projects.

## Installation

`npm i react-lite-snackbar`

## Features

- Support both CommonJS format and ES6+ module formats.
- Super easy to get started with.
- Has `open` and `close` callbacks.
- Order of snackbars are preserved.
- Has a regress/progress bar.
- Define behaviours per snackbar.

## How to use

Following is a sample code for using `react-lite-snackbar`.

```
import { useState } from "react";
import {SnackbarsComponent} from 'react-lite-snackbar';

export const SnackbarExample = () => {
const [showSnack1, setShowSnack1] = useState(false);
const [showSnack2, setShowSnack2] = useState(false);

const handleSnackbarPop = () => {
setShowSnack1(!showSnack1);
};

const handleSnackbarPop2 = () => {
setShowSnack2(!showSnack2);
};

const snackBarConfigs = {
instance1: {
open: showSnack1,
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
autoHide: false,
autoHideTimeOut: 4000,
disableCloseOnClick: true,
},
};

return (
<div>
<button onClick={handleSnackbarPop}>Pop Snack 1</button>
<button onClick={handleSnackbarPop2}>Pop Snack 2</button>
<SnackbarsContainer instances={snackBarConfigs} />
</div>
);

}
```

## Components props

| Attribute Name         | Default Value | Value Type | Description                                                                                                                  |
| ---------------------- | ------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
| open                   | `false`       | boolean    | Toggle snackbar open and close                                                                                               |
| type                   | info          | string     | Variant of snackbar. `info`, `success`, `error`, `warning`                                                                   |
| toggleOpenCloseHandler | -             | function   | A function to toggle snack `open` attribute                                                                                  |
| onCloseCallback        | -             | function   | A callback function when snackbar is closed                                                                                  |
| onOpenCallback         | -             | function   | A callback function when snackbar is opended                                                                                 |
| autoHide               | `true`        | boolean    | A prop to decide whether to automatically hide snackbar after a stipulated time. Specify the time in `autoHideTimeOut` prop. |
| autoHideTimeOut        | 3000          | number     | A prop to specify auto hide time. Minimum is 1 second by default.                                                            |
| disableCloseOnClick    | `true`        | boolean    | A prop to decide whether to show close button or not.                                                                        |
| showRegressbar         | `true`        | boolean    | A prop to hide/show progress bar/regression bar.                                                                             |

## Additional Information

You can find other storybook examples in our repository. Just clone the repository and navigate to `examples` folder. To run the project in your local environment make sure to `npm i` and then `npm run sb`. Any suggestions for improvements and bug reports are welcomed. Please raise an issue to help me make the component better. Happy Hacking :))
