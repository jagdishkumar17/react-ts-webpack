import * as React from "react";
import { Content } from "./Content";

// componentWillMount is executed before rendering, on both the server and the client side.

// componentDidMount is executed after the first render only on the client side.
// this is where AJAX requests and DOM or state updates should occur.
// this method is also used for integration with other JavaScript frameworks and any functions
// with delayed execution such as setTimeout or setInterval.
// we are using it to update the state so we can trigger the other lifecycle methods.

// componentWillReceiveProps is invoked as soon as the props are updated before another render is called.
//  we triggered it from setNewNumber when we updated the state.

// shouldComponentUpdate should return true or false value.
// this will determine if the component will be updated or not.
// this is set to true by default. If you are sure that the component doesn't need to
// render after state or props are updated, you can return false value.

// componentWillUpdate is called just before rendering.

// componentDidUpdate is called just after rendering.

// componentWillUnmount is called after the component is unmounted from the dom. We are unmounting our component in main.js.

export class LifeCycle extends React.Component<any, any>  {

   constructor(props: any) {
      super(props);
      this.state = {
         data: 0
      };
      this.setNewNumber = this.setNewNumber.bind(this);
   }

   setNewNumber() {
      this.setState({data: this.state.data + 1});
   }

   render(): JSX.Element {
      return (
         <div>
         <button onClick = {this.setNewNumber}>INCREMENT</button>
         <Content myNumber = {this.state.data}></Content>
      </div>
      );
   }
}