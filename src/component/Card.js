import React from "react";
// import data from "../data";/\

export default function Card(props) {
   return (
      <div className="Cards">
         <div className="Card">
            <img className="Card__img" src={`./images/${props.imageUrl}`}></img>
            <div>
               <div className="Card__content">
                  <div className="Card__location">
                     <img className="" src="./images/local.png"></img>
                     <h4 className="Card__location-national">
                        {props.location}
                     </h4>
                     <a
                        href={`${props.googleMapsUrl}`}
                        className="Card__location-link"
                     >
                        View on Google Maps
                     </a>
                  </div>
                  <h2 className="Card__header">{props.title}</h2>
                  <p className="Card__date">
                     {props.startDate}-{props.endDate}
                  </p>
                  <p className="Card_description">{props.description}</p>
               </div>
            </div>
         </div>
      </div>
   );
}
