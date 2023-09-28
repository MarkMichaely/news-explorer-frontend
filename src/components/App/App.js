
import './App.css';
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import SearchForm from '../SearchForm/SearchForm';
import Title from '../Title/Title';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {

  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isInfoTootlipOpen, setIsInfoTootlipOpen] = useState(false);

  const handleSignInCLick = () => {
    setIsSignInPopupOpen(true);
  }
  const handleSignUpCLick = () => {
    setIsSignUpPopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsInfoTootlipOpen(false);

  }

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };
    const closeByOverlay = (e) => {
      if (e.target.classList.contains('popup_opened')) {
        closeAllPopups();
      }
    };
    document.addEventListener('keydown', closeByEscape);
    document.addEventListener('click', closeByOverlay);

    return () => {
      document.removeEventListener('keydown', closeByEscape);
      document.removeEventListener('click', closeByOverlay);
    };
  }, [closeAllPopups]);

  return (
    <div className="App">
      <SignInPopup
        isOpen={isSignInPopupOpen}
        onClose={closeAllPopups}
        onLinkClick={handleSignUpCLick}
      />
      <SignUpPopup
        isOpen={isSignUpPopupOpen}
        onClose={closeAllPopups}
        onLinkClick={handleSignInCLick}
      />
      <InfoTooltip
        isOpen={isInfoTootlipOpen}
        onClose={closeAllPopups}
        onSignInCLick={handleSignInCLick}
        onSignUpCLick={handleSignUpCLick}
      />
      <Switch>
        <Route path={'/saved-news'}>
          <Header onSignIn={handleSignInCLick} />
          <SavedNewsHeader />
          <SavedNews />
        </Route>
        <Route exact path={'/'}>
          <div className='header-wrapper'>
            <Header onSignIn={handleSignInCLick} />
            <Title />
            <SearchForm />
          </div>
          <Main />
        </Route>
      </Switch>



      <Footer />

    </div>
  );
}

export default App;
