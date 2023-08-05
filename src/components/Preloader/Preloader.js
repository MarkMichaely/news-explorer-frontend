import './Preloader.css';

function Preloader() {
    return (
        <section className='preloader preloader_hidden'>
            <p className='preloader__circle' />
            <p className='preloader__text'>Searching for news...</p>
        </section>
    );
}

export default Preloader;