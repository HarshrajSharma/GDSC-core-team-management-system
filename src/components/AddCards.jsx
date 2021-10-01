import React from "react";
import "../css/AddCards.css"

export default function AddCards(props){
    
    return(
        <div className="addCards" >
            <div>{props.title}</div>
            <img src={props.image} alt={props.alt} />
            <div>{props.detail}</div>
        </div>
    )
}