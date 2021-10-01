import React from "react";
import AddCards from "../AddCards";

import User from "../../images/user.jpg"
import Team from "../../images/team.png"
import "../../css/Home.css"
export default function Home(){
    return(
        <div className="home" >
            <AddCards
                title="Create a new core team member"
                image={User}
                alt="user"
                detail="Add Users"
            />
            <AddCards
                title="Create a new core team "
                image={Team}
                alt="user"
                detail="Add Teams"
            />
        </div>
    )
}