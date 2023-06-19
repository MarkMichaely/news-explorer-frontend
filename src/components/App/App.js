
import './App.css';
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import SearchForm from '../SearchForm/SearchForm';
import Title from '../Title/Title';

function App() {
  return (
    <div className="App">
      <div className='header-wrapper'>
        <Header />
        <Title />
        {/* <SearchForm /> */}
      </div>

      <Switch>
        <Route exact path={'/'}>
          <Main />
        </Route>
        <Route path={'/saved-news'}>
          <SavedNews />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
