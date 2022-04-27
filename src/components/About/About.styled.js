
import styled from '@emotion/styled';


export const section = styled.section`
    
    background: gray;

    > section{
      width: 100vw;
      height: 100vh;
      background: greenyellow;
      position:relative;

      &:nth-of-type(even){
        background: gray;
      }

    }

    

    #section02 .box{
      width: 100px;
      height: 100px;
      background: red;
      position: absolute;
      left:50%;
      top:50%;
    }
    
    #section03{
      height: 500vh;
      overflow:hidden;

      .trigger-this-3{
          height:100%;
      }

      .horizontal{
       display:flex;
       

       section{
         width: 100vw;
         height:100vh;
         position:relative;
         flex-shrink: 0;
         background: hotpink;

         &:nth-of-type(even){
          background: dodgerblue;
        }
       }

      
      }

    }

    

`



