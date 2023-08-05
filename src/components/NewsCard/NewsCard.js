import './NewsCard.css';

import { useLocation } from 'react-router-dom';


function NewsCard(props) {

    const currentPage = useLocation().pathname;

    return (
        <li className="card">
            <img
                className="card__image"
                src={props.card.image}
            ></img>
            <button
                className={
                    currentPage === '/' ? 'card__save-button' : 'card__trash-button '
                }
            ></button>
            <span className="card__span card__span_type_message">
                {currentPage === '/saved-news'
                    ? 'Remove from saved'
                    : 'Sign in to save articles'}
            </span>
            <div className="card__content">
                <p className="card__date">{props.card.date}</p>
                <h3 className="card__header">{props.card.title}</h3>
                <p className="card__text">{props.card.text}</p>
                <p className="card__info">{props.card.source}</p>
            </div>
        </li>
    );
}

export default NewsCard;