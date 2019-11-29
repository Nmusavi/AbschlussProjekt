import React from "react";
import { NavLink } from "react-router-dom";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='Container'>
                <section> 
                    <NavLink className='back'  to='/'>&#60; Zurück </NavLink>
                </section>
                <section>
                    <form>
                        <article>
                        <h1>Anmelden</h1>
                        <input type='text' placeholder='Benutzname' required/>
                        <input type='password' placeholder='Password' required/>
                        </article>
                        <article>
                        <NavLink className='Neu-btn' to='/Neu'>Neu?</NavLink>
                        <NavLink  className='Login-btn' to='/Dashboard'>Login</NavLink>
                        </article>

                    </form>
                </section>
            </div>
         );
    }
}
 
export default Login;