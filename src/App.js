import React from 'react';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Neu from './components/Neu'
import Herzlich from './components/Herzlich'
import Sitzen from './components/Sitzen'
import Dutzen from './components/Dutzen'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Rooms from './components/Rooms'

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  return (
    
    <BrowserRouter>
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login}/>
      <Route path="/neu" component={Neu}/>
      <Route path="/herzlich" component={Herzlich}/>
      <Route path="/Sitzen" component={Sitzen}/>
      <Route path="/Dutzen" component={Dutzen}/>
      <Route path="/Dashboard" component={Dashboard}/>
      <Route path="/Profile" component={Profile}/>
      <Route path="/Rooms" component={Rooms}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
