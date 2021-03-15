import {Container, TopContainer, Menu} from "./style";
import Avatar from "../../imgs/avatar.png"

const MobileMenu = ({setOpenMenu}) => {
    return (
        <Container>
            <TopContainer>
                <img src={Avatar} alt="Your Avatar"/>
                <i className="fas fa-arrow-right" onClick={() => setOpenMenu(false)}></i>
            </TopContainer>
            <Menu>
                <div>
                    <p>Read</p>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div>
                    <p>Top Stories</p>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div>
                    <p>Write</p>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div>
                    <p>Listen</p>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div>
                    <p>Advertise</p>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div>
                    <p>About</p>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div>
                    <p>Tech Companies</p>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div>
                    <p>Careers</p>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div>
                    <p>Slogging</p>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </Menu>
        </Container>
    )
}

export default MobileMenu;