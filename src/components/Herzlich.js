import React from "react";
import { NavLink } from "react-router-dom";
import Users from '../Users'

class Herzlich extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 

       }
  }
  render() { 
      return ( 
          <div className='Container'>
              <section> 
                  <NavLink className='back'  to='/Neu'>&#60; Zurück </NavLink>
              </section>
              <section>
                  <form>
                      <article>
                      <h1>Hallo {Users.Name}</h1>
                      <p className='herzlich'>Schön, dass Sie Via. beigetreten sind.
                        Wir hoffen darauf, dass Sie viele schöne
                        Erinnerungen wieder finden werden.
                        Wie dürfen wir Sie in zukunft 
                        ansprechen?
                      </p>
                      </article>
                      <article>
                      <NavLink  className='Neu-btn' to='/Dutzen'>Du?</NavLink>
                      <NavLink  className='Login-btn' to='/Sitzen'>Sie?</NavLink>
                      </article>

                  </form>
              </section>
          </div>
       );
  }
}

export default Herzlich;
