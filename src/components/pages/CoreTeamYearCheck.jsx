import React, { useState } from "react";
import "../../css/AddUsers.css"

import axios from "axios";
export default function CoreTeamYearCheck(){
    const[year, setYear]=useState("");
    const[lead, setLead]=useState("");

    async function handleSubmit(e){

        const newCoreTeam={
            year: year,
            lead: lead
        }
        await axios.post("http://localhost:5000/createnewcoreteam", newCoreTeam)
        .then((response)=>{
            console.log(response);
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
                    <option>Apple</option>
                </select>
                <button type="submit" >Create</button>
            </form>
        </div>
    )
}