import * as React from "react";
import * as ReactDOM from "react-dom";
import { ForceUpdate } from "./components/ReactJSComponentAPI/ForceUpdate";
declare let module: any;

ReactDOM.render(<ForceUpdate />,
document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
 }