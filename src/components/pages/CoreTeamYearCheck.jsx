import React, { useState } from "react";
import "../../css/AddUsers.css"

import axios from "axios";
import UserIcon from "../../images/userIcon.png"
export default function CoreTeamYearCheck(){
    const [year, setYear]=useState("");
    const [leadName, setLeadName] = useState("");
    const [department, setDepartment] = useState("");
    const [batch, setBatch] = useState("");
    const [postImageBase64, setPostImageBase64] = useState(UserIcon);
    const [linkedIn, setLinkedIn] = useState("");
    const [github, setGithub] = useState("");    
    const [image, setImage]=useState();

    async function handleSubmit(e){
        e.preventDefault();
        //Createing new form data
        const data = new FormData();

        //Apending the image to image json "image is name for the image input" json that is sent is {image: "theImage"}
        data.append('image', image);
        data.append('year', year);
        data.append('leadName', leadName);
        data.append('department', department);
        data.append('batch', batch);
        data.append('linkedIn', linkedIn);
        data.append('github', github);
        
        await axios.post(process.env.REACT_APP_SERVER + "/createnewcoreteam", data)
        .then((response)=>{
            console.log(response.data);
            alert(response.data);
        });
        setYear("");
        setLeadName("");
        setDepartment("");
        setBatch("");
        setPostImageBase64(UserIcon);
        setLinkedIn("");
        setGithub("");
    }
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
   function handleFileChange(e) {

    console.log(e.target.files[0]);
    //We get the file in files[0]
    setImage(e.target.files[0]);
    const uploadedFile = e.target.files[0];
    toBase64(uploadedFile)
        .then((res) => {
            // console.log(res)
            setPostImageBase64(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    return(
        <div className="addUserFormDiv" >
        <h1>Create New Core Team</h1>
    




            <form className="addUserForm" onSubmit={handleSubmit} encType="multipart/form-data" method="POST">
                <label>Enter Year</label>
                <input 
                    type="number"  
                    value={year}
                    required
                    onChange={(e)=>{
                        setYear(e.target.value);
                    }}
                />
                <div style={{width: "100%", textAlign: "center"}} >
                    <img src={postImageBase64} alt="UserImage" style={{width: "100px", height: "100px", borderRadius: "50%", marginTop: "5px"}}/>
                </div>
                <label>Lead Name</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setLeadName(e.target.value)
                    }}
                    value={leadName}
                    required
                />

                <label>Department</label>
                <input 
                    type="text"
                    value={department}
                    required
                    onChange={(e)=>{
                        setDepartment(e.target.value)
                    }} />

                <label>Batch</label>
                <select id="selectBatchBox" onChange={() => {

                    var selectBox = document.getElementById("selectBatchBox");
                    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
                    // alert(selectedValue)
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
                 value={linkedIn}
                 
                 onChange={(e)=>{
                     setLinkedIn(e.target.value);
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
                
                
                    <label>Upload Image</label>
                    <input name="image" id="file-input" type="file" accept="image/*" onChange={handleFileChange}  />

                <button type="submit">Create</button>
            </form>
        </div>
    )
}