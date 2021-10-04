import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/pages/Home";
import AddUser from "./components/pages/AddUser";
import AddTeams from "./components/pages/AddTeams";
import AllTeams from "./components/pages/AllTeams";
import AddCoreTeamMember from "./components/pages/AddCoreTeamMember";
export default function App(){
  return(
    <Router>

        <Navbar/>

        <Switch>

          <Route exact path="/" >
            <Home/>
          </Route>

          <Route exact path="/createuser" >
            <AddUser/>
          </Route>

          <Route exact path="/createteam" >
            <AddTeams/>
          </Route>

          <Route exact path="/allteams" >
            <AllTeams/>
          </Route>

          <Route exact path="/addcoreteammember/:year"  render={ ({match}) => <AddCoreTeamMember year={match.params.year}  />}/>

        </Switch>
    </Router>
  )
}