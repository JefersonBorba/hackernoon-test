import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-color: #003b00;
    position: absolute;
    top: 0;
`;

export const TopContainer = styled.div`
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    i{
        font-size: 2rem;
        color: #00ff00;
        margin-right: 10px;
        :hover{
            cursor:pointer;
        }
    }
    img{
        width: 50px;
        margin-left: 20px;
        :hover{
            cursor:pointer;
        }
    }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 50px;
    div{
        height: 65px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        :hover{
            cursor:pointer;
        }
        p{
            color: white;
            font-weight: bold;
        }
        i{
            color: #00ff00;
        }
        border-bottom: 2px solid green;
    }
`;