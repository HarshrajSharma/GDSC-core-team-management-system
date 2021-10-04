import React from "react";
import axios from "axios"

export default function  AddCoreTeamMember(props){
    axios.get(process.env.REACT_APP_SERVER + "/coreteam")
    .then((response)=>{
        // console.log(response.data);
        response.data.forEach(element => {
            console.log(element)
            if (element.year===parseInt(props.year)) {
                console.log(element)
            }
        });
    })
    return(
        <div>
            {props.year}
        </div>
    )
}