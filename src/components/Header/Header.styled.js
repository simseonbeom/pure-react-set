import styled from '@emotion/styled'

export const Head = styled.header`
  background:orange;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  .logo{
    font-size: 50px;
  }

  .gnb{
    display: flex;

    li{
      margin-left: 20px;
    }
  }
`