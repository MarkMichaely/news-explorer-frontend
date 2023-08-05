import './Header.css';
import { Route } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
function Header() {
    return (
        <>
            <Route path="/saved-news">
                <header className="header header_type_saved-news">
                    <h1 className='header__title'>NewsExplorer</h1>
                    <Navigation />
                </header>
            </Route>
            <Route exact path="/">
                <header className="header header_type_main">
                    <h1 className='header__title'>NewsExplorer</h1>
                    <Navigation />
                </header>
            </Route>
        </>

    )
}
export default Header;