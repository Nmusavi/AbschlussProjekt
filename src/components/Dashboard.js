import React from "react";
import { NavLink } from "react-router-dom";
//import Users from '../Users'
import { FiHome,FiCalendar,FiMessageSquare,FiInfo,FiLogOut } from 'react-icons/fi';
import { MdPeople } from 'react-icons/md';
import Users from '../Users'



class Dashboard extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 

       }
  }
  render() { 
      return ( 
          <div className='DashContainer'>
              <section className='DashHead'>
                  <article>
                      <h1>{Users[0].Name}</h1>
                      <h5>{Users[0].Email}</h5>
                  </article>
                  <article>
                      <img src={Users[0].Image} width="80" height="80"  alt=''/>
                  </article>

              </section>
              <section className='Profillist'>
                  <NavLink style={style} to='/Profile'><FiHome className='icon'/>Profil</NavLink>
                  <NavLink style={style} to='/Dashboard'><MdPeople className='icon'/>Raum beitreten</NavLink>
                  <NavLink style={style} to='/Rooms'><FiCalendar className='icon'/>Meine Räume</NavLink>
                  <NavLink style={style} to='/Dashboard'><FiMessageSquare className='icon'/>Nachrichten</NavLink>
                  <NavLink style={style} to='/Dashboard'><FiInfo className='icon'/>Benachrichtigungen</NavLink>
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

export default Dashboard;
