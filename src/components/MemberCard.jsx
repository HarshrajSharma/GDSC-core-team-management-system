import React from "react";
import "../css/MemberCard.css"

export default function Card(props){
    return(
        <div className="memberCardDiv" >
            <img src={props.image} alt="member" />
            <div className="userInfo" >
                <h1 style={{color:"#0066FF"}} >{props.name}</h1>
                <h1>{props.role}</h1>
                <div className="socialLinks" >
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-github-square"></i> 
                </div>
            </div>
        </div>
    )
}