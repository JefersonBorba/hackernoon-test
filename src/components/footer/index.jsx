import {Container} from "./style";

const Footer = () => {
    return (
        <Container>
            <div className="links">
                <a className="highlighted" href="#">Help</a>
                <a className="highlighted" href="#">About</a>
                <a className="highlighted" href="#">Start Writing</a>
                <a className="highlighted" href="#">Sponsors:</a>
                <a href="#">Brand-as-Author</a>
                <a href="#">Sitewide Billboard</a>
                <a href="#">Ad by tag</a>
                <a href="#">Newsletter</a>
                <a href="#">Noonies</a>
                <a href="#">Contact Us</a>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Cookies</a>
                <a href="#">Stories published yesterday</a>
                <a href="#">Leaderboard</a>
                <a href="#">Contributor's Club</a>
                <a href="#">Chrome Extension</a>
            </div>
            <div className="icons">
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-github"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-instagram"></i>
                <i className="fas fa-podcast"></i>
                <i className="fas fa-rss-square"></i>
            </div>
        </Container>
    )
}

export default Footer;