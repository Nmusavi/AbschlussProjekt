import React from "react";
import { NavLink } from "react-router-dom";
import {IoMdArrowBack} from 'react-icons/io';


class Rooms extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 

       }
  }
  render() { 
      return ( 
          <div className='RoomsContainer'>
              <section className='RoomsHead'>
                  <article>
                  <NavLink style={{color:'gray',fontSize:30}} className='back'  to='/Dashboard'><IoMdArrowBack/></NavLink>
                      <h1>Meine Räume</h1>
                  </article>
              </section>
                <div className='favoritlink'><NavLink style={link} to='/Rooms'>Meine Favoriten</NavLink></div>
             
              <section className='RoomsCardContainer'>
                  <div className='Anna'>
                  <NavLink style={AnnaStyle} to='/Rooms'>Anna Musterfrau</NavLink>
                  </div>
                  
                  <div className='Richard'>
                  <NavLink style={RichardStyle} to='/List'>Richard Willms</NavLink>
                    </div>
                   
                  
              </section>
           <NavLink  className='AddRooms' to='/Rooms'>+</NavLink>
          </div>
       );
  }
}
const link ={
    textDecoration:'none',
    color: 'white',
    fontWeight:'bold',
    fontSize:20
}
const RichardStyle={
    color:'white',
    textDecoration:'none',
    fontSize:27,
    fontWeight:'bold',
    marginLeft:48,
    marginTop:49
}
const AnnaStyle={
    color:'white',
    textDecoration:'none',
    fontSize:27,
    fontWeight:'bold',
    marginLeft:48,
    marginTop:49
}



export default Rooms;