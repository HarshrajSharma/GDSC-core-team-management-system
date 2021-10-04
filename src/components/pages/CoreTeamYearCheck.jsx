import React, { useEffect, useState } from "react";
import "../../css/AddUsers.css"

import axios from "axios";
export default function CoreTeamYearCheck(){
    const[year, setYear]=useState("");
    const[lead, setLead]=useState("");
    let [coreMembers]=useState([]);
    useEffect(()=>{
        axios.get(process.env.REACT_APP_SERVER + "/coreuser")
        .then((response)=>{

            response.data.forEach(element => {
                coreMembers.push(element);
            });
        })
    },[]);

    async function handleSubmit(e){
        e.preventDefault();
        const newCoreTeam={
            year: year,
            lead: lead
        }
        await axios.post(process.env.REACT_APP_SERVER + "/createnewcoreteam", newCoreTeam)
        .then((response)=>{
            console.log(response.data);
            alert(response.data);
        })
    }

    return(
        <div className="addUserFormDiv" >
        <h1>Create New Core Team</h1>
            <form className="addUserForm" onSubmit={handleSubmit} >
                <label>Enter Year</label>
                <input 
                    type="number"  
                    value={year}
                    required
                    onChange={(e)=>{
                        setYear(e.target.value);
                    }}
                />
                <label>Select Lead</label>
                <select id="selectLeadBox" onChange={()=>{
                    var selectBox = document.getElementById("selectLeadBox");
                    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
                    // alert(selectedValue);
                    setLead(selectedValue);
                }} >
                    <option selected >None</option>
                    {coreMembers.map((element)=>{
                        return(
                            <option>{element.name} {element.department} {element.batch}</option>
                        )
                    })}
                </select>
                <button type="submit" >Create</button>
            </form>
        </div>
    )
}