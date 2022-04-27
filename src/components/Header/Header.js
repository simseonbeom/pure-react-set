
// import { Link } from "react";
import { Link } from 'react-router-dom';

import * as S from './Header.styled';

function Header({Component,pageProps}){

  return (
    <>
    <S.Head>
      <h1 className="logo">❤️</h1>
      <nav className="gnb">
        <Link to="/">home</Link>
        <Link to="/about">list01</Link>
        <Link to="/about">list01</Link>
        <Link to="/about">list01</Link>
        <Link to="/about">list01</Link>
        <Link to="/about">list01</Link>
        
      </nav>
    </S.Head>
    </>
  )
}

export default Header;