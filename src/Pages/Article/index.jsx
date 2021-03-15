import {Container} from "./style";
import {useState} from "react"
import Header from "../../components/header"
import MobileMenu from "../../components/mobile-menu"
import ArticleBody from "../../components/article-body"
import HeaderTitle from "../../components/header-title"
import Footer from "../../components/footer"

const Article = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [displayTitle, setDisplayTitle] = useState(false)
    const [displayHeader, setDisplayHeader] = useState(true)

    function myFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
          setDisplayTitle(true);
          setDisplayHeader(false);
        }else{
          setDisplayTitle(false);
          setDisplayHeader(true);
        }
      }
    
      window.onscroll = function() {myFunction()};

    return (
        <Container>
            <Header setOpenMenu={setOpenMenu} displayHeader={displayHeader}/>
            <HeaderTitle title={title} displayTitle={displayTitle} author={author}/>
            {openMenu && <MobileMenu setOpenMenu={setOpenMenu}/>}
            {!openMenu && <ArticleBody setTitle={setTitle} setAuthor={setAuthor}/>}
            <Footer />
        </Container>
    )
}
export default Article;