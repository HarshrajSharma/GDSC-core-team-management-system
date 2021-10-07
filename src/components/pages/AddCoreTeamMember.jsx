import React, { useEffect, useState } from "react";
import axios from "axios"

export default function  AddCoreTeamMember(props){

    const[coreUser, setCoreUser]=useState([]);

    //Making get request to get all core members
    useEffect(()=>{
        let cm=[];
        axios.get(process.env.REACT_APP_SERVER  + "/coreuser")
        .then((response)=>{
            response.data.forEach(element => {
                cm.push(element);
            });
            setCoreUser(cm);
        })
    },[]);

    //Making post request to all members to specific collection 
    axios.post(process.env.REACT_APP_SERVER + "/addmemberstoteam", {"year": props.year, "name": props.name, "role": props.year})
    .then((response)=>{
        console.log(response.data);
        
    })
    return(
        <div>
            
            <form>
                <label>Name</label>
                <select>
                    <option selected >None</option>
                    {coreUser.map((element)=>{
                        return(
                            <option>{element.name} {element.batch}</option>
                        )
                    })}
                </select>
                <label>Role</label>
                <input/>
            </form>
        </div>
    )
} 