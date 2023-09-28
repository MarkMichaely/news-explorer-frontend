import './Header.css';
import { Route } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import menuWhite from "../../images/menuIconWhite.svg";
import menuBlack from "../../images/menuIconBlack.svg";
import closeIcon from "../../images/closeIcon.svg";
import React from 'react';
function Header(props) {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    function handleMenuClick() {
        setIsNavOpen(!isNavOpen);
    }
    return (
        <>

            <Route path="/saved-news">
                <header
                    className={`header header_type_saved-news ${isNavOpen ? 'header_nav-open ' : ''} `}>
                    <div className='header__container'>
                        <h1 className='header__title'>News Explorer</h1>
                        <button
                            className='header__button'
                            onClick={handleMenuClick}
                        >
                            {isNavOpen ? <img
                                src={closeIcon}
                                alt='close icon'
                            /> : <img
                                src={menuBlack}
                                alt='menu button'
                            />}
                        </button>
                    </div>
                    <Navigation isNavOpen={isNavOpen} onSignIn={props.onSignIn} />
                </header>
            </Route>
            <Route exact path="/">
                <header
                    className={`header header_type_main ${isNavOpen ? 'header_nav-open ' : ''} `}>
                    <div className='header__container'>
                        <h1 className='header__title'>News Explorer</h1>
                        <button
                            className='header__button'
                            onClick={handleMenuClick}
                        >
                            {isNavOpen ? <img
                                src={closeIcon}
                                alt='close icon'
                            /> : <img
                                src={menuWhite}
                                alt='menu button'
                            />}
                        </button>
                    </div>
                    <Navigation isNavOpen={isNavOpen} onSignIn={props.onSignIn} />
                </header>
            </Route>
        </>

    )
}
export default Header;