import React, { useEffect, useState } from "react";
import axios from "axios"

import AddCard from "../AddCards"
import GDSC from "../../images/GDSC Core.jpg"
import {Link} from "react-router-dom"




export default function AllTeams(){
    const [teams,setTeams]=useState([]);
    useEffect(()=>{
            let a=[];
            axios.get(process.env.REACT_APP_SERVER + "/coreteam")
            .then((response)=>{
                    response.data.forEach((element) => {
                    a.push(element);
                })
                setTeams(a);
            },[])
    });
    return(
        <div style={{textAlign: "center", backgroundColor: "beige" , height: "100vh" }} >
            <h1 style={{fontSize: "40px"}} >Core Teams</h1>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}} >
                {teams.map((element)=>{
            let url=`addcoreteammember/${element.year}`
                    return(
                        <Link to={url} >
                            <AddCard
                                title={element.year}
                                image={GDSC}
                                detail="Add Member"
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}