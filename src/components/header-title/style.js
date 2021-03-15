import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 60px;
    background-color: #00bb00;
    white-space: nowrap; 
    z-index: 5;
    position: fixed;
    transition: top 0.3s;
    a{
        color: black;
        background: -webkit-linear-gradient(bottom, green 0, green 45%, transparent 45%);  
            :hover{
                text-decoration: underline;
                color: #212428;
                background: -webkit-linear-gradient(bottom, #00ff00 0, #00ff00 100%, transparent 100%); 
            }
    }
    img{
        width: 40px;
    }
    overflow-x: hidden;
    @media screen and (min-width: 768px) {
        justify-content: flex-start;
        h2{
            font-size: 1.3rem;
        }
      }
`;