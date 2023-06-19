import './About.css';
export default function About() {
    return (
        <section className='about'>
            <img
                className='about__image'
                alt='image of apple'
                src='https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTk2MTIwNDk0MzY4MzY4MTMz/the-10-most-popular-poodle-mixed-breed-dogs.webp'
            />
            <div className='about__paragraphs'>
                <h2 className='about__title'>About the author</h2>
                <p className='about__text'>
                    This block describes the project author. Here you should indicate your name,
                    what you do, and which development technologies you know.
                </p>
                <p className='about__text'>
                    You can also talk about your experience with Practicum,
                    what you learned there, and how you can help potential customers.
                </p>
            </div>
        </section>
    )
}