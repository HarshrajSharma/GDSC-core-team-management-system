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

        </Switch>
    </Router>
  )
}