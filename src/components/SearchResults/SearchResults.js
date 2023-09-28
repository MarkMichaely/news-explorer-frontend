import './SearchResults.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults(props) {
  return (
    <section className="serach-results">
      <h2 className="serach-results__header">Search results</h2>
      <NewsCardList />
      <button className='serach-results__button'>
        Show more
      </button>
    </section>
  );
}

export default SearchResults;
