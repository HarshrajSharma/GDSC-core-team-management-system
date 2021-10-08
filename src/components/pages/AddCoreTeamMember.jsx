import React, { useEffect, useState } from "react";
import axios from "axios"

import MemberCard from "../MemberCard";
import "../../css/AddUsers.css"
export default function  AddCoreTeamMember(props){


    const[coreUser, setCoreUser]=useState([]);
    const[coreTeam, setCoreTeam]=useState([]);
    const[name, setName]=useState();
    const[role, setRole]=useState();

    let a=1;
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

    //Fetch members for a specific year and add it to coreTeam state
    async function showMember(){
        let ct=[];
        await axios.get(process.env.REACT_APP_SERVER + "/coreteam")
        .then((response)=>{
            response.data.forEach(element => {
                if(element.year===parseInt(props.year)){
                    element.members.forEach(memb => {
                        ct.push(memb)
                    });
                }
            });
        })
        console.log("COre Team");
        setCoreTeam(ct);
        console.log(coreTeam);
    }
    useEffect(()=>{
       showMember();
    },[]);

   async function handleSubmit(){
        //Making post request to all members to specific collection 
        await axios.post(process.env.REACT_APP_SERVER + "/addmemberstoteam", {"year": props.year, "name": name, "role": role})
        .then((response)=>{
         console.log(response.data);
        });
        setName("");
        setRole("");
   }
    return(
        <div>
            <div className="addUserFormDiv" style={{height:"auto"}} >
                <h1>Members of {props.year} GDSC core team</h1>
                <div style={{display:"flex", justifyContent: "center", flexWrap:"wrap"}} >
                    {coreTeam.map((element)=>{
                        return(
                            <MemberCard
                                name={element.name}
                                role={element.role}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="addUserFormDiv">

            {/* This section will show the current members of the team */}
            


                {/* This Section is for adding new users to the team */}
                <h1>Add members to {props.year} team.</h1>
                <form className="addUserForm" onSubmit={handleSubmit} >
                    <label>Name</label>
                    <select id="selectAddNewName" onChange={()=>{
                        var selectBox = document.getElementById("selectAddNewName");
                        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
                        // alert(selectedValue);
                        setName(selectedValue);
                    }} >

                        <option selected >Select Member</option>
                        {coreUser.map((element)=>{
                            return(
                                <option>{element.name}</option>
                            )
                        })}
                    </select>

                    <label>Role</label>
                    <select id="selectAddNewRole" onChange={()=>{
                        var selectBox = document.getElementById("selectAddNewRole");
                        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
                        // alert(selectedValue);
                        setRole(selectedValue);
                    }} >


                        <option selected >Select Role</option>
                        <option>Tech Lead</option>
                        <option>Director of Outreach</option>
                        <option>Design Lead</option>
                        <option>Full-Stack Developer</option>
                        <option>Front-end Developer</option>
                        <option>Back-end Developer</option>
                        <option>Security, Web and Cloud</option>
                        <option>Security</option>
                        <option>Cloud</option>
                        <option>Android Developer</option>
                        <option>iOS Developer</option>
                        <option>Flutter Developer</option>
                        <option>React Native Developer</option>
                        <option>AI/ML/DL/RL/CV/NLP Developer</option>
                        <option>IoT Developer</option>
                        <option>UX/UI/CAD/3D</option>
                        <option>Game Developer</option>

                    </select>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        </div>
    )
} 