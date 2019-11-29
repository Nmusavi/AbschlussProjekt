import React from "react";
import { NavLink } from "react-router-dom";
import Users from '../Users'

class Neu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         }
         this.handleName = this.handleName.bind(this);
    }
    handleName(e){

       Users.Name=e.target.value;
       console.log(Users.Name)
    }
    render() { 
        return ( 
            <div className='Container'>
                <section> 
                    <NavLink className='back'  to='/login'>&#60; Zurück </NavLink>
                </section>
                <section>
                    <form className='Neu-form'>
                        <article>
                        <h1>Registrieren</h1>
                        <input onChange={this.handleName} type='text' placeholder='Benutzname'/>
                        <input type='email' placeholder='Email'/>
                        <input type='password' placeholder='Password'/>
                        <input type='password' placeholder='Password Wiederholen'/>
                        </article>
                        <article>
                        <NavLink className='submit-btn'  to='/Herzlich'>Submit</NavLink>
                        </article>
                    </form>
                </section>
            </div>
         );
    }
}
 
export default Neu;