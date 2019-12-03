import React from "react";
import { NavLink } from "react-router-dom";
import {IoMdArrowBack} from 'react-icons/io';
import Messages from '../Messages.png'



class Message extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 

       }
  }
  render() { 
      return ( 
          <div className='ZeitstrahlContainer'>
              <section className='ZeitstrahlHead'>
                  <article>
                  <NavLink style={{color:'gray',fontSize:30}} className='back'  to='/Dashboard'><IoMdArrowBack/></NavLink>
                      <h1>Nachrichten</h1>
                      <p></p>
                  </article>
              </section>
              <section className='CardContainer'>
                <img className='Gallerie' src={Messages} alt=''/>
              
                
               </section>
               <div className="add-btn">
               <NavLink  className='ZeitstrahlPlus' to='/Zeitstrahl'>+</NavLink>
               </div>
        
          </div>
       );
  }
}


export default Message;