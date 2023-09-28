import './NewsCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


function NewsCard(props) {

    const currentPage = useLocation().pathname;
    const [isVisible, setIsVisible] = useState(false);

    return (
        <li className="card">
            <img
                className="card__image"
                src={props.card.image}
                alt="card image"
            ></img>
            <button
                className={
                    currentPage === '/' ? 'card__save-button' : 'card__trash-button '
                }
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
            ></button>
            {isVisible && (<span className="card__span card__span_type_message">
                {currentPage === '/saved-news'
                    ? 'Remove from saved'
                    : 'Sign in to save articles'}
            </span>)}
            {!isVisible && currentPage === '/saved-news' && (
                <span className="card__span card__span_type_keywords">
                    {"KEYWORD"}
                </span>
            )}
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