import './SavedNewsHeader.css';
function SavedNewsHeader() {
    return (
        <header className="news-header">

            <p className="news-header__title">Saved articles</p>
            <h2 className="news-header__counter">
                Elise, you have 5 saved articles
            </h2>
            <p className="news-header__keyword-list">
                By keywords: <span className='news-header__keywords'>Nature, Yellowstone, and 2 other</span>
            </p>
        </header>
    );
}

export default SavedNewsHeader;
