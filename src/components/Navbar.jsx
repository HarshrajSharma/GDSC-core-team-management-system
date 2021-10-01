import React from "react";
import Logo from "../images/GDSC HIT Logo.png"

import "../css/Navbar.css"
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
       <Link to="/" >
            <div className="navbar" >
                <img src={Logo} alt="Logo" className="logo" />
            </div>
       </Link>
    )
}