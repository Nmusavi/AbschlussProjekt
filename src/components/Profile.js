import React from "react";
import { NavLink } from "react-router-dom";
//import Users from '../Users'
import { FiLogOut,FiSettings } from 'react-icons/fi';
import { IoMdPerson ,IoMdArrowBack } from 'react-icons/io';
import {MdSecurity,MdPeople} from 'react-icons/md'
import Users from '../Users'



class Profile extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 

       }
  }
  render() { 
      return ( 
          <div className='ProfileContainer'>
              <section className='ProfilHead'>
                  <article>
                  <NavLink style={{color:'gray',fontSize:30}} className='back'  to='/Dashboard'><IoMdArrowBack/></NavLink>
                      <h1>{Users[0].Name}</h1>
                  </article>
              </section>
              <div><img src={Users[0].Image} width="120" height="120"  alt=''/></div>
             
              <section className='ProfillistProfile'>
                  <NavLink style={style} to='/Profile'><IoMdPerson className='iconprofile'/>Ihre Daten</NavLink>
                  <NavLink style={style} to='/Profile'><MdSecurity className='iconprofile'/>Sicherheit</NavLink>
                  <NavLink style={style} to='/Profile'><FiSettings className='iconprofile'/>Einstellungen</NavLink>
                  <NavLink style={style} to='/Profile'><MdPeople className='iconprofile'/>Privatsphäre</NavLink>
              </section>
           <NavLink  className='dashLink' to='/login'><FiLogOut style={logout}/>Logout</NavLink>
          </div>
       );
  }
}
const style ={
    color:'white',
    fontSize:20,
    textDecoration:'none',
    marginBottom:45,
    display: 'flex',
    flexDirection: 'row',
    

  
}
const logout={
    marginRight:10
}

export default Profile;