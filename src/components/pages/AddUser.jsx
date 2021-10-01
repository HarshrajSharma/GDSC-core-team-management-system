import React from "react";
import "../../css/AddUsers.css"

export default function AddUser(){
    return(
        <div className="addUserFormDiv" >
        <h1>Create a new core team member</h1>
            <form className="addUserForm" >
                <input type="text" />
            </form>
        </div>
    )
}