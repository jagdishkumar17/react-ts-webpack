import * as React from "react";

export class Content extends React.Component<any, any> {
   constructor(props: any) {
      super(props);

   }
   componentWillMount() {
      console.log("Component WILL MOUNT!");
   }
   componentDidMount() {
      console.log("Component DID MOUNT!");
   }
   componentWillReceiveProps(newProps:any) {
      console.log("Component WILL RECIEVE PROPS!");
   }
   shouldComponentUpdate(newProps:any, newState:any) {
      return true;
   }
   componentWillUpdate(nextProps:any, nextState:any) {
      console.log("Component WILL UPDATE!");
   }
   componentDidUpdate(prevProps:any, prevState:any) {
      console.log("Component DID UPDATE!");
   }
   componentWillUnmount() {
      console.log("Component WILL UNMOUNT!");
   }
   render(): JSX.Element {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}