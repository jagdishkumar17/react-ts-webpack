import * as React from "react";
import * as ReactDOM from "react-dom";
import { Stateful } from "./components/Stateful/Stateful";
declare let module: any;

ReactDOM.render(<Stateful />,
document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
 }