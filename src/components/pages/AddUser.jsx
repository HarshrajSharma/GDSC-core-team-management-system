import React, { useState } from "react";
import "../../css/AddUsers.css"

import axios from "axios"
export default function AddUser() {


    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [batch, setBatch] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");


    async function handleSubmit(e) {
        // e.preventDefault();
        const user = {
            name: name,
            department: department,
            batch: batch,
            linkedin: linkedin,
            github: github
        }
        await axios.post(process.env.REACT_APP_SERVER+"/createuser", user)
            .then(response => {
                console.log(response.data)
            })
            setName("");
            setDepartment("");
            setBatch("NONE");
            setLinkedin("");
            setGithub("");
    }
    return (
        <div className="addUserFormDiv" >
            <h1>Create a new core team member</h1>
            <form className="addUserForm" onSubmit={handleSubmit} >
                <label>Name</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    value={name}
                    required
                />

                <label>Department</label>
                <input 
                    type="text"
                    value={department}
                    onChange={(e)=>{
                        setDepartment(e.target.value)
                    }} />

                <label>Batch</label>
                <select id="selectBatchBox" onChange={() => {

                    var selectBox = document.getElementById("selectBatchBox");
                    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
                    // alert(selectedValue);
                    setBatch(selectedValue);
                }} >
                    <option selected >None</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                </select>

                <label>LinkedIn</label>
                <input 
                 type="text" 
                 value={linkedin}
                 onChange={(e)=>{
                     setLinkedin(e.target.value);
                 }}
                />

                <label>Github</label>
                <input 
                    type="text" 
                    value={github}
                    onChange={(e)=>{
                        setGithub(e.target.value);
                    }}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}