import styled from "styled-components";

export const Container = styled.footer`
    width: 100vw;
    background-color: #3c3c3b;
    padding: 20px;
    display: flex;
    flex-direction: row;
    .links{
        width: 70%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        a{
            font-size: 0.9rem;
            text-decoration: none;
            color: white;
            background: -webkit-linear-gradient(bottom, green 0, green 45%, transparent 45%); 
            :hover{
                color: #212428;
                background: -webkit-linear-gradient(bottom, #00ff00 0, #00ff00 100%, transparent 100%); 
            }
            margin: 5px;
        }
        .highlighted{
            font-weight: bold;
        }
    }
    .icons{
        width: 20%;
        i{
            width: 20px;
            text-align: center;
            font-size: 1.2rem;
            padding: 5px;
            color:#23ce49;
            :hover{
                cursor:pointer;
            }
        }
    }
    
`;