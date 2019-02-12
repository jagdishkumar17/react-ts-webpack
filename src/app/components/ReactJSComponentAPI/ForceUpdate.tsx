import * as React from "react";

export class ForceUpdate extends React.Component<any, any>  {
   // sometimes we might want to update the component manually.
   //  this can be achieved using the forceUpdate() method.
   constructor(props: any) {
      super(props);
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
   }

   forceUpdateHandler(): void {
      this.forceUpdate();
   }

   render(): JSX.Element {
      return (
         <div>
            <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
         </div>
      );
   }
}