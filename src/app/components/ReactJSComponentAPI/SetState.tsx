import * as React from "react";

// we will explain React component API.
// We will discuss three methods: setState(), 
// forceUpdate and ReactDOM.findDOMNode(). In new ES6 classes, 
// we have to manually bind this. We will use this.method.bind(this) in the examples.
export class SetState extends React.Component<any, any>  {
   // setState() method is used to update the state of the component. 
   // This method will not replace the state, but only add changes to the original state.
   constructor(props: any) {
      super(props);
      this.state = {
         data: []
      }
      this.setStateHandler = this.setStateHandler.bind(this);
   };

   setStateHandler() {
      var item = "setState..."
      var myArray = this.state.data.slice();
        myArray.push(item);
         this.setState({data: myArray})
   };
      
   render(): JSX.Element  {
      return  (
         <div>
           <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}