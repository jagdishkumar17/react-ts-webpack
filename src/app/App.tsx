import * as React from "react";
import * as ReactDOM from "react-dom";
import { RefsAndDOM } from "./components/ReactJSComponentAPI/RefsAndDOM";
declare let module: any;

ReactDOM.render(<RefsAndDOM />,
document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
 }