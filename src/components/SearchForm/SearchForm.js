import './SearchForm.css';
function SearchForm() {

    return (
        <form className="search-form">
            <input placeholder='Enter topic' className="search-form__input"></input>
            <button className="search-form__button">Search</button>
        </form>
    );
}

export default SearchForm;
