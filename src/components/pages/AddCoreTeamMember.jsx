import React, { useEffect, useState } from "react";
import axios from "axios"

import MemberCard from "../MemberCard";
import "../../css/AddUsers.css"
import UserIcon from "../../images/userIcon.png"
export default function  AddCoreTeamMember(props){


    const [coreTeam, setCoreTeam]=useState([]);
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [batch, setBatch] = useState("");
    const [image, setImage]=useState();
    const [postImageBase64, setPostImageBase64] = useState(UserIcon);
    const [linkedIn, setLinkedIn] = useState("");
    const [github, setGithub] = useState("");    
    const [role, setRole]=useState();

   

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
       // eslint-disable-next-line
    },[]);

   async function handleSubmit(e){
       
        e.preventDefault();
       //Createing new form data
       const data = new FormData();

       //Apending the image to image json "image is name for the image input" json that is sent is {image: "theImage"}
       data.append('image', image);
       data.append('year', props.year);
       data.append('name', name);
       data.append('department', department);
       data.append('batch', batch);
       data.append('linkedIn', linkedIn);
       data.append('github', github);
       data.append('role', role);
       
        //Making post request to all members to specific collection 
        await axios.post(process.env.REACT_APP_SERVER + "/addmemberstoteam", data)
        .then((response)=>{
         console.log(response.data);
         showMember();
        });
        setPostImageBase64(UserIcon);
        setName("");
        setDepartment("");
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
        <div>
            <div className="addUserFormDiv" style={{height:"auto"}} >
                <h1>Members of {props.year} GDSC core team</h1>
                <div style={{display:"flex", justifyContent: "center", flexWrap:"wrap"}} >
                    {coreTeam.map((element)=>{
                        return(
                            <MemberCard
                                name={element.name}
                                role={element.role}
                                image={element.image}
                                linkedIn={element.linkedIn}
                                github={element.github}
                            />
                        )
                    })}
                </div>
            </div>




            {/* This form will create a new member in the core team */}
            <div className="addUserFormDiv" >
            <h1>Create a new core team member</h1>
            <form className="addUserForm" onSubmit={handleSubmit} encType="multipart/form-data" method="POST" >
                <div style={{width: "100%", textAlign: "center"}} >
                    <img src={postImageBase64} alt="UserImage" style={{width: "100px", height: "100px", borderRadius: "50%"}}/>
                </div>
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
                
                <label>Role</label>
                    <select id="selectAddNewRole" onChange={()=>{
                        var selectBox = document.getElementById("selectAddNewRole");
                        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
                        // alert(selectedValue)
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
                    <label>Upload Image</label>
                    <input name="image" id="file-input" type="file" accept="image/*" onChange={handleFileChange}  />

                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
} 