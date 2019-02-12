import * as React from "react";

export class Content extends React.Component<any, any> {
   constructor(props: any) {
      super(props);
   }
   render() {
      return (
         <table>
            <tbody>

               <tr>
                  <td>{this.props.data.id}</td>
                  <td>{this.props.data.name}</td>
                  <td>{this.props.data.age}</td>
               </tr>

            </tbody>
         </table>

      );
   }
}