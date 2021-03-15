import {Container, LeftDiv, RightDiv , Menu, DesktopMenu} from "./style"
import {useState, useEffect} from "react"
import Logo from "../../imgs/hackernoon-logo.png"
import DesktopLogo from "../../imgs/hn-logo.png"

const Header = ({setOpenMenu, displayHeader}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [desktopMenu, setDesktopMenu] = useState(false);
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        if(width >= 768){
            setDesktopMenu(true)
        }else{
            setDesktopMenu(false)
        }
      }, [width])
    return (
        <Container style={{top: `${displayHeader ? "0" : "-100px"}`}}>
            <Menu>
                <LeftDiv>
                    {desktopMenu ? <img className="desktopLogo" src={DesktopLogo} alt=""/> : <i><img src={Logo} alt="Logo"/></i>}
                </LeftDiv>
                <RightDiv>
                    <div className="input-container">
                        <input placeholder="Search..."/>
                        <i className="fas fa-search"></i>
                    </div>
                    {desktopMenu && <button className="write">Start Writing</button>}
                    {desktopMenu && <button className="login">Log in</button>}
                    <i className="fas fa-sun"></i>
                    {!desktopMenu && <i className="fas fa-bars" onClick={() => setOpenMenu(true)}></i>}
                    
                </RightDiv>
            </Menu>
            {desktopMenu &&
            <DesktopMenu>
                <p>Read</p>
                <p>Top Stories</p>
                <p>Write</p>
                <p>Listen</p>
                <p>Advertise</p>
                <p>About</p>
                <p>Tech Companies</p>
                <p>Careers</p>
                <p>Slogging</p>
            </DesktopMenu>}
        </Container>
    )
}

export default Header;