import React from "react";
import "../../App.css";
import UserHome from "../userHome/UserHome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../userHome/NavBar";
import Profile from "../userHome/profile";
import Cards from "../userHome/myPetsCards";
import Pet from "../userHome/PetPage";
import Form from "../pages/Form";

export default function Services() {
  return (
    <>
      <Navbar />
      <Cards></Cards>
      <Pet></Pet>
      <Router>
        <Switch>
          <Route path="/userHome" exact component={UserHome} />
        </Switch>
      </Router>
    </>
  );
}
