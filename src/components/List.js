import React from "react";
import { NavLink } from "react-router-dom";
import {IoMdArrowBack} from 'react-icons/io';


class List extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 

       }
  }
  render() { 
      return ( 
          <div className='RoomsContainer'>  
              <section className='ListStory'>
                        <section className='ListPatchwork'>
                            <section className='ListZeitstrahl'>
                                <section className='ListHead'>
                                    <article>
                                        <NavLink style={{color:'gray',fontSize:30}} className='back'  to='/Rooms'><IoMdArrowBack/></NavLink>
                                            <h1>Ansicht</h1>
                                    </article>
                                </section>
                                   <NavLink to='/Zeitstrahl' className='Zeitstrahl'>Zeitstrahl</NavLink> 
                                  
                            </section>
                           
                             <NavLink className='Patchwork' to='/Patchwork'>Patchwork</NavLink>
                           
                        </section>
                  <article>
                      <h1 className='Story'>Story</h1>
                  </article>
              </section>
          </div>
       );
  }
}



export default List;