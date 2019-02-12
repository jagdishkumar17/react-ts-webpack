import * as React from "react";
import { Header } from "./Header";
import { Content } from "./Content";


export class Stateful extends React.Component<any, any> {

   constructor(props: any) {
      super(props);
      this.state = {
         data:
            [
               {
                  "id": 1,
                  "name": "Foo",
                  "age": "20"
               },
               {
                  "id": 2,
                  "name": "Bar",
                  "age": "30"
               },
               {
                  "id": 3,
                  "name": "Baz",
                  "age": "40"
               }
            ]
      };
   }

   render() {
      return (
         <div>
            <Header />
            {/* You need to pass an array of element to jsx.
            The problem is that forEach does not return anything (i.e it returns undefined).
             So better use map because it returns an array */}
            {this.state.data.map((item: any, i: any) => <Content
               key={i} data={item} />)}

           {/* { this.state.data.forEach((item: any, i: any) => {
               <Content data={item} />   //THIS DOES NOT WORK
            })} */}
         </div>
      );
   }
}