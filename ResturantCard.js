import React from "react";
import { RES_IMG_CDN } from "../components/data";
const ResturantCard=({name,cloudinaryImageId,cuisines,avgRating,sla}) =>{

    return(
        <>
        {/* <div className="card" > */}
        <img src={`${RES_IMG_CDN}${cloudinaryImageId}`} className="card_img"/>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4> Rating - {avgRating} stars</h4>
        <h4> Distance - {sla.lastMileTravelString} </h4>
        {/* </div> */}
        </>
        )
}
export default ResturantCard;