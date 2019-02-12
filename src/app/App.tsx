import * as React from "react";
import * as ReactDOM from "react-dom";
import { Stateful } from "./components/Stateful/Stateful";
import { Clients } from "./components/Clients/Client";
declare let module: any;

ReactDOM.render(<Clients />,
    document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}