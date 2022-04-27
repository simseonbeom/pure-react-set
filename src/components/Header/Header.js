
// import { Link } from "react";
import { Link } from 'react-router-dom';

import * as S from './Header.styled';
import { gsap } from 'gsap'
import DelayLink from '../common/DelayLink'

function Header({Component,pageProps}){

  function start(){
    
   
    gsap.to('.fake',{duration:0.5,x:0});
    
  
  }

  function end(){
    
    gsap.to('.fake',{delay:0.3,duration:0.5,x:'100%',onComplete:()=>{
      gsap.set('.fake',{x:'-100%'});
    }});
  
  }

  return (
    <>
    <S.Head>
      <h1 className="logo">❤️</h1>
      <ul className="gnb">
        <li><DelayLink delay={500} onDelayStart={start} onDelayEnd={end} to="/">home</DelayLink></li>
        <li><DelayLink delay={500} onDelayStart={start} onDelayEnd={end} to="/about">list01</DelayLink></li>
        <li><Link to="/about">list01</Link></li>
        <li><Link to="/about">list01</Link></li>
        <li><Link to="/about">list01</Link></li>
        <li><Link to="/about">list01</Link></li>
        
      </ul>
    </S.Head>
    </>
  )
}

export default Header;