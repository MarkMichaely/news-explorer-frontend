import About from "../About/About";
import NothingFound from "../NothingFound/NothingFound";
import Preloader from "../Preloader/Preloader";
import SearchResults from "../SearchResults/SearchResults";

function Main() {
    return (
        <main className="main">
            <SearchResults />
            <Preloader />
            <NothingFound />
            <About />

        </main>

    )
}
export default Main;