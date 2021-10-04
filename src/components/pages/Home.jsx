import React from "react";
import AddCards from "../AddCards";
import {Link} from "react-router-dom"
import User from "../../images/user.jpg"
import Team from "../../images/team.png"
import "../../css/Home.css"
export default function Home(){
    return(
        <div className="home" >
            <h1>👋 Welcome, to the GDSC HIT core team management system.</h1>
            <div className="homeCards" >
                <Link to="/createuser" >
                    <AddCards
                        title="Create a new core team member"
                        image={User}
                        alt="user"
                        detail="Add Users"
                        onClick="Hello"
                    />
                </Link>
                <Link to="/createteam" >
                    <AddCards
                        title="Create a new core team "
                        image={Team}
                        alt="user"
                        detail="Add Teams"
                    />
                </Link>
                <Link to="/allteams" >
                    <AddCards
                        title="View all teams and add team members"
                        image={Team}
                        alt="user"
                        detail="Add Core Team Members"
                    />
                </Link>
            </div>
            
        </div>
    )
}