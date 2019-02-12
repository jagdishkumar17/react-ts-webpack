import * as React from "react";
import { Header } from "./Header";
import { Content } from "./Content";

export class Stateless extends React.Component {
   render() {
      return (
         <div>
            <Header></Header>
            <Content></Content>
         </div>
      );
   }
}