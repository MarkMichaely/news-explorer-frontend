import './Navigation.css';
import { NavLink, useLocation } from "react-router-dom";
function Navigation() {
    const currentPage = useLocation().pathname;
    return (

        <nav className='nav__menu'>
            <div className='nav__links'>
                <NavLink className='nav__link ' to='/'>
                    Home
                </NavLink>
                <NavLink className='nav__link ' to='saved-news'>
                    Saved articles
                </NavLink>
            </div>
            <button
                className={`nav__button 
                ${currentPage === '/saved-news' ? 'nav__button_black' : ''}`}
            >
                Sign in
            </button>
        </nav>
    )
}

export default Navigation;

