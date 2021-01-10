import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import  FormAdmin from './Components/AdminPage/AddPet';
import Form from './Components/pages/Form';
import Footer from './Components/Footer'
import Profile from './Components/userHome/profile'
import Pet from './Components/userHome/PetPage'
import UserHome from './Components/userHome/UserHome'
import mypets from './Components/userHome/mypets'
import  AdminHome from './Components/AdminPage/AdminHome'
import PetList from './Components/AdminPage/PetList'

function App() {
  
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/addPet' component={ FormAdmin} />
          <Route path='/sign-up' component={Form} />
          <Route path='/myhome' component={UserHome} />
          <Route path='/adminHome' component={AdminHome} />
          <Route path='/profile' component={Profile} />
          <Route path='/myPets' component={mypets} />
          <Route path= '/PetPage' component={Pet}/>
          <Route path= '/PetList' component={PetList}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App;