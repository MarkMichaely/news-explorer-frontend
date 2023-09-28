import './Navigation.css';
import { NavLink, useLocation } from "react-router-dom";
import React, { useState } from 'react';
import logoutWhite from "../../images/logOutIconWhite.svg";
import logoutBlack from "../../images/logOutIconBlack.svg";

function Navigation(props) {
    const isLoggedIn = false;
    console.log(props)

    const currentPage = useLocation().pathname;
    return (

        <nav className={`nav
        ${props.isNavOpen ? 'nav_open' : ''}
        ${currentPage === '/saved-news' ? 'nav_saved-news' : ''}`}>
            {isLoggedIn ?
                (
                    <div className={'nav__links'}>

                        <NavLink className={(isActive) => isActive ?
                            `nav__link nav__link_selected`
                            :
                            'nav__link'} to='/'>
                            Home
                        </NavLink>
                        <NavLink className={(isActive) => isActive ?
                            `nav__link nav__link_selected_black`
                            :
                            'nav__link'} to='saved-news'>
                            Saved articles
                        </NavLink>

                        <button
                            className={`nav__button nav__button_logout
                ${currentPage === '/saved-news' ? 'nav__button_black' : ''}`}

                        >
                            <p className='nav__user'>Elise</p>
                            <img
                                className={`nav__logout}`}
                                alt='Logout Icon'
                                src={currentPage === '/saved-news' ? logoutBlack : logoutWhite}
                            />
                        </button>

                    </div>)
                :
                (
                    <div className='nav__links'>

                        <NavLink className={(isActive) => isActive && !props.isNavOpen ?
                            `nav__link nav__link_selected`
                            :
                            'nav__link'} to='/'>
                            Home
                        </NavLink>
                        <NavLink className={(isActive) => isActive && !props.isNavOpen ?
                            `nav__link nav__link_selected_black`
                            :
                            'nav__link'} to='saved-news'>
                            Saved articles
                        </NavLink>

                        <button
                            onClick={props.onSignIn}
                            className={`nav__button 
                ${currentPage === '/saved-news' ? 'nav__button_black' : ''}
                ${props.isNavOpen ? 'nav__button nav__button_nav-open' : 'nav__button'}
                `}

                        >
                            Sign in
                        </button>
                    </div>
                )}
        </nav>
    )
}

export default Navigation;
