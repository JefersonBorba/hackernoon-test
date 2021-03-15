import styled from "styled-components";

export const Container = styled.main`
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #212428;
    @media screen and (min-width: 768px) {
        padding-top: 120px;
        h1{
            width: 90%;
            font-size: 2.5rem;
            text-align: center;
        }
      }
    .tags{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        width: 80%;
    }
    .tag{
        color: #c2cad6;
        border: solid 2px #c2cad6;
        padding: 7px;
        margin: 2px;
        transition: border 0.2s;
        font-size: 0.8rem;
        :hover{
            cursor: pointer;
            border: solid 2px #00ff00;
        }
    }
    .divisor{
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        h1{
            width: auto;
            margin: 50px 20px;
            padding: 0;
        }
        hr{
            width: 30%;
            
        }
        @media screen and (min-width: 768px) {
            width: 90vw;
            hr{
                width: 100%;
            }
          }
    }
    .join-hackernoon{
        background-color: transparent;
        border: solid 5px #00ff00;
        padding: 10px;
        color: white;
        font-size: 1.1rem;
        font-weight: bold;
        margin-top: 50px;
        :hover{
            cursor: pointer;
            background-color: #75787c;
        }
        @media screen and (min-width: 768px) {
            font-size: 1.7rem;
            width: 350px;
            height: 80px;
            :hover{
                font-size: 1.8rem;
                width: 380px;
                height: 90px;
            }
          }
    }
    .join-description{
        color: white;
        width: 80%;
        text-align: center;
        margin-bottom: 30px;
    }
    h1{
        margin: 0;
        padding: 20px;
        color: white;
    }
    img{
        width: 90%;
    }
    .reactions{
        display:flex;
        flex-direction: row;
        justify-content: flex-end;
        color: #3f4042;
        align-items: center;
        font-size: 1.8rem;
        i{
            transition: color .3s;
            margin-left: 7px;
            :hover{
                cursor:pointer;
            }
            :last-child{
                margin-right: 20px;
            }
        }
        .fa-heart:hover{
            color: red !important;
        }
        .fa-lightbulb:hover{
            color: yellow !important;
        }
        .fa-hat-wizard:hover{
            color: purple !important;
        }
        .fa-piggy-bank:hover{
            color: pink !important;
        }
    }
`;
export const StoryMeta = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        width: 90%;
        flex-direction: row;
        justify-content: space-between;
        .fa-bookmark{
            font-size: 1.1rem;
        }
      }
    div:first-child{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: white;
        font-size: 0.85rem;
        padding: 0 10px;
        margin-right: 10px;
        span{
            color: #3c3c3b;
            background-color: white;
            padding: 7px 5px;
            margin-left: 10px;
        }
    }
    
    .far.fa-bookmark{
        color: #adb6bf;
    }
    .fas.fa-bookmark{
        color: #1ecf57;
    }
`;

export const Author = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 35px 0;
    .author-top{
        width: 100%;
        display: flex;
        flex-direction: row;
        .div{
            display: flex;
            flex-direction: column;
        }
        a{
            font-weight: bold;
            font-size: 1.1rem;
        }
        p{
            font-weight: bold;
        }
    }
    .author-bottom{
        margin-left: 75px;
    }
    img{
        border: 3px gray solid;
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }
    i{
        color:#23ce49;
        :hover{
            cursor:pointer;
        }
        margin-right: 10px;
    }
    p{
        color: white;
    }
    a{
  
        text-decoration: none;
        color: white;
        background: -webkit-linear-gradient(bottom, green 0, green 45%, transparent 45%); 
        
    }
    a:hover{
        color: #212428;
        background: -webkit-linear-gradient(bottom, #00ff00 0, #00ff00 100%, transparent 100%); 
    }
    @media screen and (min-width: 768px) {
        width: 25%;
      }
`;

export const Article = styled.article`
    width: 100%;
    display flex;
    flex-direction: column;
    align-items: center;
    transition: background .3s;
    .paragraph{
        width: 100%;
        color: white;
        text-align: left;
        padding: 20px 0;
    }
    .code-container{
        width: 80%;
        overflow: auto;
    }
    h2{
        color: white;
    }
    .youtube-container{
        iframe{
            width: 80vw;
            height: 40vh;
        }
    }
    a{
  
        text-decoration: none;
        color: white;
        background: -webkit-linear-gradient(bottom, green 0, green 45%, transparent 45%);  
        
    }
    a:hover{
        color: #212428;
        background: -webkit-linear-gradient(bottom, #00ff00 0, #00ff00 100%, transparent 100%); 
    }
    blockquote{
        font-size: 1.3rem;
        color: white;
        font-style: italic;
        text-align: center;
    }
    @media screen and (min-width: 768px) {
        width: 50%;
        .youtube-container{
            iframe{
                width: 45vw;
                height: 60vh;
            }
        }
        .code-container{
            width: 70vw;
        }
      }
`;

export const ShareStory = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    p{
        color: white;
        margin-right: 10px;
    }
    i{
        color:#23ce49;
        :hover{
            cursor:pointer;
        }
        margin-left: 10px;
    }
`;

export const AuthorSub = styled.div`
    width: 100%;
    border: 3px solid #00ff00;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    .author-top{
        margin: 15px;
        img{
            width: 50px;
            height: 50px;
            margin-right: 20px;
            border: 3px gray solid;
        }
        display: flex;
        flex-direction: row;
        .div{
            display: flex;
            flex-direction: column;
        }
        a{
            font-weight: bold;
            font-size: 1.1rem;
            text-decoration: none;
            color: white;
            background: -webkit-linear-gradient(bottom, green 0, green 15%, transparent 15%); 
            :hover{
                color: #212428;
                background: -webkit-linear-gradient(bottom, #00ff00 0, #00ff00 100%, transparent 100%); 
            }
        }
        p{
            font-weight: bold;
            color: #00ff00;
        }
        @media screen and (min-width: 768px) {
            flex-direction: column;
          }
        
    }
    .author-bottom{
        margin: 15px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        a{
            width: 80%;
            color: white;
            text-decoration: none;
            font-size: 1.3rem;
            font-weight: bold;
        }
        i{
            color: white;
        }
        @media screen and (min-width: 768px) {
            width: 60%;
            a{
                font-size: 1.1rem;
            }
          }
    }
    @media screen and (min-width: 768px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
      }
`;

export const Related = styled.div`
    width: 80%;
    border: 1px solid gray;
    margin: 20px 0;
    .mainImage{
        width: 100%;
    }
    :hover{
        cursor: pointer;
        i{
            color: #c2cad6ff;
        }
    }
    i{
        transition: color .5s;
        color: #c2cad600;
        padding: 5px;
        
    }
    .relatedMeta{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
        p{
            color: white;
        }
    }
    .relatedAvatar{
        width: 50px;
        height: 50px;
        border: 3px solid gray;
    }
    .relatedAuthor{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        .relatedAuthorName{
            display: flex;
            flex-direction: column;
        }
        a{
            font-weight: bold;
            font-size: 1.1rem;
            text-decoration: none;
            color: white;
            background: -webkit-linear-gradient(bottom, green 0, green 45%, transparent 45%); 
            :hover{
                color: #212428;
                background: -webkit-linear-gradient(bottom, #00ff00 0, #00ff00 100%, transparent 100%); 
            }
        }
        p{
            color: white;
        }
    }
    .relatedTitle{
        display: flex;
        flex-direction: row;
        .bookmark{
            width: 30px;
        }
        
        a{
            padding: 5px;
            font-weight: bold;
            font-size: 1.1rem;
            text-decoration: none;
            color: white;
            background: -webkit-linear-gradient(bottom, green 0, green 45%, transparent 45%);  
            :hover{
                text-decoration: underline;
                color: #212428;
                background: -webkit-linear-gradient(bottom, #00ff00 0, #00ff00 100%, transparent 100%); 
            }
        }
    }
    @media screen and (min-width: 768px) {
        width: 90vw;
        height: 500px;
        flex-direction: row;
      }
`;
export const ArticleHolder = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    @media screen and (min-width: 768px) {
        flex-direction: row;
      }
`;

export const RelatedHolder = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 100%;
    }
    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        .mainImage{
            overflow-y: hidden;
            width: 100%;
            height: 25vw;
        }
      }
`;