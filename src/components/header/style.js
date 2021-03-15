import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    z-index: 4;
    position: fixed;
    transition: top 0.3s;
    @media screen and (min-width: 768px) {
        height: 110px;
      }
    i{
        font-size: 2rem;
        :hover{
            cursor: pointer;
        }
    }
    .fa-bars{
        color:#003b00;
    }
    .fa-sun{
        color:#006100;
    }
    .fa-search{
        width: 50px;
        color: #23ce49;
        display: flex;
        align-items: center;
        justify-content: center;
        font-align: center;
        background-color: #003b00;
        height: 39px;
        font-size: 1.2rem;
        border-radius: 0 2px 2px 0;
    }
    .input-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        :focus{
            background-color: red;
        }
    }
    input{
        height: 37px;
        background-color: #003b00;
        border: none;
        font-weight: bolder;
        font-family: monospace, serif;
        color: #00Af00;
        border-radius: 2px 0 0 2px;
        font-size: 1.1rem;
        width: 150px;
        padding-left: 10px;
        :focus{
            outline:none;
        }
    }
`;

export const LeftDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    img{
        width: 40px;
    }
    .desktopLogo{
        width: 250px;
        margin-left: 20px;
    }
    i{
        margin-left: 20px;
    }
`;

export const RightDiv = styled.div`
    width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (min-width: 768px) {
        width: 500px;
      }
    .write{
        background-color: transparent;
        border-radius: 1px;
        border: solid black 2px;
        color: white;
        padding: 5px;
        font-weight: bold;
        font-size: 1.1rem;
        :hover{
            background-color: #FFFFFF66;
        }
    }
    .login{
        background-color: transparent;
        border-radius: 1px;
        border: none;
        color: white;
        padding: 5px;
        font-weight: bold;
        font-size: 1.1rem;
        :hover{
            background-color: #FFFFFF66;
            border: solid black 2px;
        }
    }
`;
export const Menu = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #00bb00;`;
    

export const DesktopMenu = styled.div`
    background-color: #003b00;
    width: 100vw;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    p{
        margin: 0 10px;
        color: white;
        :hover{
            cursor:pointer;
        }
    }

`;