
import * as S from './Header.styled';

function Header({Component,pageProps}){

  return (
    <>
    <S.Head>
      <h1 className="logo">❤️</h1>
      <ul className="gnb">
        <li>list01</li>
        <li>list01</li>
        <li>list01</li>
        <li>list01</li>
        <li>list01</li>
      </ul>
    </S.Head>
    </>
  )
}

export default Header;