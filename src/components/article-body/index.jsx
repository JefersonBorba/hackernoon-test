import {Container, StoryMeta,ArticleHolder, Author, Article, ShareStory, AuthorSub,RelatedHolder, Related} from "./style";
import {useState} from "react";
import parse from "html-react-parser";
import data from "../../data/hackernoon-article.json"

const ArticleBody = ({setTitle, setAuthor}) => {
    const [bookmark, setBookmark] = useState(false)
    const [reactions, setReactions] = useState(data.reactions.total)
    const [reactionHeart, setReactionHeart] = useState(false)
    const [reactionBulb, setReactionBulb] = useState(false)
    const [reactionWizard, setReactionWizard] = useState(false)
    const [reactionPiggy, setReactionPiggy] = useState(false)

    document.title = data.title;
    setTitle(data.title)
    setAuthor(data.profile.handle)
    return (
        <Container>
            <h1>{data.title}</h1>
            <StoryMeta>
                <div>
                    <div>February 21st 2021<span><i className="fas fa-star"></i> 567 reads</span></div>
                    {bookmark && <i className="fas fa-bookmark" onClick={() => setBookmark(false)}></i>}
                    {!bookmark && <i className="far fa-bookmark" onClick={() => setBookmark(true)}></i>}
                </div>
                <div className="reactions">
                    <p>{reactions}</p>
                    <i className="fas fa-heart" 
                    style={{
                        color: `${reactionHeart ? "red" : "#3f4042"}`,
                        fontSize: `${reactionHeart ? "2.2rem" : "1.8rem"}`
                    }}
                    onClick={() => {
                        if(!reactionHeart){
                            setReactionHeart(true);
                            setReactions(reactions + 1)
                        }else{
                            setReactionHeart(false);
                            setReactions(reactions - 1)
                        }
                    }}/>
                    <i className="fas fa-lightbulb" 
                    style={{
                        color: `${reactionBulb ? "yellow" : "#3f4042"}`,
                        fontSize: `${reactionBulb ? "2.2rem" : "1.8rem"}`
                    }}
                    onClick={() => {
                        if(!reactionBulb){
                            setReactionBulb(true);
                            setReactions(reactions + 1)
                        }else{
                            setReactionBulb(false);
                            setReactions(reactions - 1)
                        }
                    }}></i>
                    <i className="fas fa-hat-wizard" 
                    style={{
                        color: `${reactionWizard ? "purple" : "#3f4042"}`,
                        fontSize: `${reactionWizard ? "2.2rem" : "1.8rem"}`
                    }}
                    onClick={() => {
                        if(!reactionWizard){
                            setReactionWizard(true);
                            setReactions(reactions + 1)
                        }else{
                            setReactionWizard(false);
                            setReactions(reactions - 1)
                        }
                    }}></i>
                    <i className="fas fa-piggy-bank" 
                    style={{
                        color: `${reactionPiggy ? "pink" : "#3f4042"}`,
                        fontSize: `${reactionPiggy ? "2.2rem" : "1.8rem"}`
                    }}
                    onClick={() => {
                        if(!reactionPiggy){
                            setReactionPiggy(true);
                            setReactions(reactions + 1)
                        }else{
                            setReactionPiggy(false);
                            setReactions(reactions - 1)
                        }
                    }}></i>
                </div>
            </StoryMeta>
            <img src={data.mainImage} alt="Main Image"/>
            <ArticleHolder>
                <Author>
                    <div className="author-top">
                        <img src={data.profile.avatar} alt="Avatar"/>
                        <div className="author-name">
                            <a href="#">@{data.profile.handle}</a>
                            <p>{data.profile.displayName}</p>
                        </div>
                    </div>
                    <div className="author-bottom">
                        <p>{data.profile.bio}</p>
                        <div>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-github"></i>
                        </div>
                    </div>
                </Author>
                <Article>
                    {parse(data.markup)}
                    <div className="reactions">
                    <p style={{color: "white"}}>{reactions}</p>
                    <i className="fas fa-heart" 
                    style={{
                        color: `${reactionHeart ? "red" : "#3f4042"}`,
                        fontSize: `${reactionHeart ? "2.2rem" : "1.8rem"}`
                    }}
                    onClick={() => {
                        if(!reactionHeart){
                            setReactionHeart(true);
                            setReactions(reactions + 1)
                        }else{
                            setReactionHeart(false);
                            setReactions(reactions - 1)
                        }
                    }}/>
                    <i className="fas fa-lightbulb" 
                    style={{
                        color: `${reactionBulb ? "yellow" : "#3f4042"}`,
                        fontSize: `${reactionBulb ? "2.2rem" : "1.8rem"}`
                    }}
                    onClick={() => {
                        if(!reactionBulb){
                            setReactionBulb(true);
                            setReactions(reactions + 1)
                        }else{
                            setReactionBulb(false);
                            setReactions(reactions - 1)
                        }
                    }}></i>
                    <i className="fas fa-hat-wizard" 
                    style={{
                        color: `${reactionWizard ? "purple" : "#3f4042"}`,
                        fontSize: `${reactionWizard ? "2.2rem" : "1.8rem"}`
                    }}
                    onClick={() => {
                        if(!reactionWizard){
                            setReactionWizard(true);
                            setReactions(reactions + 1)
                        }else{
                            setReactionWizard(false);
                            setReactions(reactions - 1)
                        }
                    }}></i>
                    <i className="fas fa-piggy-bank" 
                    style={{
                        color: `${reactionPiggy ? "pink" : "#3f4042"}`,
                        fontSize: `${reactionPiggy ? "2.2rem" : "1.8rem"}`
                    }}
                    onClick={() => {
                        if(!reactionPiggy){
                            setReactionPiggy(true);
                            setReactions(reactions + 1)
                        }else{
                            setReactionPiggy(false);
                            setReactions(reactions - 1)
                        }
                    }}></i>
                </div>
                <ShareStory>
                    <p>Share this story</p>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fas fa-envelope"></i>
                </ShareStory>
                <AuthorSub>
                    <div className="author-top">
                        <img src={data.profile.avatar} alt="Avatar"/>
                        <div className="author-name">
                            <a href="#">@{data.profile.handle}</a>
                            <p>{data.profile.displayName}</p>
                        </div>
                    </div>
                    <div className="author-bottom">
                        <i className={data.profile.adIcon}></i>
                        <a href={data.profile.adLink}>{data.profile.adText}</a>
                    </div>
                </AuthorSub>
                </Article>
                
            </ArticleHolder>
            
                <div className="divisor">
                    <hr/>
                    <h1>RELATED</h1>
                    <hr/>
                </div>
                <RelatedHolder>
                    {data.relatedStories.map((data,index) => (
                        <Related key={index}>
                            <div className="relatedTitle">
                                <a href="#">{data.title ? data.title : data.text}</a>
                                <div className="bookmark">
                                    <i className="far fa-bookmark"></i>
                                </div>
                            </div>
                            <div className="mainImage">
                                <img  src={data.mainImage ? data.mainImage : data.image} alt="main image"/>
                            </div>
                            <div className="relatedMeta">
                                <div className="relatedAuthor">
                                    <img className="relatedAvatar" src={data.profile && data.profile.avatar} alt=""/>
                                    <div className="relatedAuthorName">
                                        <a href="#">@{data.profile ? data.profile.handle : data.companyName}</a>
                                        <p>{data.profile && data.profile.displayName}</p>
                                    </div>
                                </div>
                                <div>
                                    {data.estimatedTime && <p>{data.estimatedTime}min</p>}
                                </div>
                            </div>
                        </Related>
                    ))}
                </RelatedHolder>
                <div className="divisor">
                    <hr/>
                    <h1>TAGS</h1>
                    <hr/>
                </div>
                <div className="tags">
                    {data.tags.map((data, index) => <div key={index} className="tag">#{data}</div>)}
                </div>
                <button className="join-hackernoon">Join Hacker Noon <i className="fas fa-glasses"></i></button>
                <p className="join-description">Create your free account to unlock your custom reading experience.</p>
        </Container>
    )
}

export default ArticleBody;