import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp.js'
import Login from './Components/Login.js'
import NavBar from './Components/NavBar.js'
import Footer from './Components/Footer.js'
import Home from './Pages/Home.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
        <div>
          <Switch>
              <Route path="/SignUp">
                  <SignUp/>
              </Route>
              <Route path="/Login">
                  <Login/>
              </Route>
              <Route path="/">
                <div className="App">
                  <NavBar nextAction="Book Now" url="/"/>
                  <Home/>
                  <Footer/>
                </div>
              </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;