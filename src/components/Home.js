import React from "react";
import styled  from "styled-components";
import Imgbg from '../Main_Background.png'
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <Container>
        <NavLink className='animation'  style={style} to='/Login'>Komm herein &#8594; </NavLink>
    </Container>
  );
}

const style ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
        width:'50vw',
        height: '45px',
        backgroundColor: '#eea900',
        textDecoration:'none',
        color:'white',
        fontSize:'1em',
        textAlign: 'center',
        fontWeight:'bold',
        marginTop: '87vh',
        marginLeft: '47vw',
        borderRadius:'30px 0 0 30px',
        cursor:'pointer',
}


const Container = styled.div`
@media only screen and (max-width: 414px) {
  display: flex;
  flex-direction: row;
  width:100%;
  height:100%;
  background-image: url(${Imgbg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
`;

export default Home;
