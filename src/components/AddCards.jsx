import React from "react";
import "../css/AddCards.css"

export default function AddCards(props){
    function handleClick(e){
        alert("Hello");
    }
    return(
        <div className="addCards" onClick={handleClick} >
            <div>{props.title}</div>
            <img src={props.image} alt={props.alt} />
            <div>{props.detail}</div>
        </div>
    )
}