import './Footer.css'
import { Link } from "react-router-dom";
import facebookIcon from "../../images/facebookIcon.svg";
import githubIcon from "../../images/githubIcon.svg";

const year = new Date().getFullYear();
function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">{`© ${year} Supersite, Powered by News API`}</p>
            <div className='footer__container'>
                <div className="footer__links">
                    <Link className="footer__link" to="/">
                        Home
                    </Link>
                    <a className="footer__link" href="https://practicum.com">
                        Practicum
                    </a>
                </div>
                <div className='footer__social'>
                    <a href="https://github.com/MarkMichaely/" className="footer__social-link"
                    ><img
                            src={githubIcon}
                            alt="github-icon"
                            className="footer__social-icon"
                        />
                    </a>
                    <a href="https://facebook.com" className="footer__social-link"
                    ><img
                            src={facebookIcon}
                            alt="facebook-icon"
                            className="footer__social-icon"
                        />
                    </a>
                </div>
            </div>
        </footer >)
}
export default Footer;