import React from "react";
import Logo from "../images/GDSC HIT Logo.png"

import "../css/Navbar.css"
export default function Navbar(){
    return(
        <div className="navbar" >
            <img src={Logo} alt="Logo" className="logo" />
        </div>
    )
}