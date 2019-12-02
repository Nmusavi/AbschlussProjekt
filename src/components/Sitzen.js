import React from "react";
import { NavLink } from "react-router-dom";
import Users from '../Users'


class Sitzen extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
      }
  }

  render() { 
      return ( 
          <div className='Container'>
              <section> 
                  <NavLink className='back'  to='/Herzlich'>&#60; Zurück </NavLink>
              </section>
              <section>
                  <form className="Profilbildform"> 
                      <article>
                      <h1>Hallo {Users.Name}</h1>
                      <p className='herzlich'>
                          Möchtest du ein Profilbild hinzufügen?
                      </p>
                      </article>
                      <article>
                      <NavLink  className='Neu-btn' to='/login'>Ja</NavLink>
                      <NavLink  className='Login-btn' to='/login'>Nein</NavLink>
                      </article>

                  </form>
              </section>
          </div>
       );
  }
}

export default Sitzen;
