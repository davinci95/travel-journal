import React from "react";
import Card from "./component/Card";
import Navbar from "./component/Navbar";
import data from "./data";

export default function App() {
   let cards = data.map((item) => {
      return <Card key={item.id} {...item} />;
   });

   return (
      <div className="container">
         <Navbar />
         <section>{cards}</section>
      </div>
   );
}
