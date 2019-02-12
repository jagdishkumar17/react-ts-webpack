import * as React from "react";
import * as ReactDOM from "react-dom";
import { LifeCycle } from "./components/LifeCycle/LifeCycle";
declare let module: any;

ReactDOM.render(<LifeCycle />,
document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}