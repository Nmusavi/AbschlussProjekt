import React from "react";
import { NavLink } from "react-router-dom";
import {IoMdArrowBack} from 'react-icons/io';
import Gallerie from '../patchwork.png'



class Patchwork extends React.Component {
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
                  <NavLink style={{color:'gray',fontSize:30}} className='back'  to='/List'><IoMdArrowBack/></NavLink>
                      <h1>Richard Willms</h1>
                      <p>Patchwork</p>
                  </article>
              </section>
              <section className='CardContainer'>
                <img className='Gallerie' src={Gallerie} alt=''/>
              
                
               </section>
               <div className="add-btn">
               <NavLink  className='ZeitstrahlPlus' to='/Zeitstrahl'>+</NavLink>
               </div>
        
          </div>
       );
  }
}


export default Patchwork;