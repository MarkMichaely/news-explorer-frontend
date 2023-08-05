
import './App.css';
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import SearchForm from '../SearchForm/SearchForm';
import Title from '../Title/Title';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function App() {
  const currentPage = useHistory().location.pathname;
  console.log(currentPage);
  return (
    <div className="App">

      <Switch>
        <Route path={'/saved-news'}>
          <Header />
          <SavedNewsHeader />
          <SavedNews />
        </Route>
        <Route exact path={'/'}>
          <div className='header-wrapper'>
            <Header />
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
