import {Container} from "./style"
import Logo from "../../imgs/hackernoon-logo.png"

const HeaderTitle = ({title, displayTitle, author}) => {
    return (
        <Container style={{top: `${displayTitle ? "0" : "-100px"}`}}>
            <i><img src={Logo} alt="Logo"/></i>
            <h2>{title} by <a href="#">@{author}</a></h2>
        </Container>
    )
}

export default HeaderTitle;