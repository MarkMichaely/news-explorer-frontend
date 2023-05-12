import './Header.css';
import { Link, Route } from "react-router-dom";
function Header() {
    return (
        <Route path="/">
            <header className="header header_type_main">
                <h1 className='header__text'>NewsExplorer</h1>
                <div className='header__menu'>
                    <div className='header__links'>
                        <Link className='header__link header__link_selected' to='/'>
                            Home
                        </Link>
                        <Link className='header__link header__link_hidden' to='saved-news'>
                            Saved articles
                        </Link>
                    </div>
                    <button className='header__button'
                    >Sign in</button>
                </div>

            </header>
        </Route>)
}
export default Header;