import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

import img_1 from '../../images/card_1.png';
import img_2 from '../../images/card_2.png';
import img_3 from '../../images/card_3.png';
import img_4 from '../../images/card_4.png';
import img_5 from '../../images/card_5.png';

const card_1 = { image: img_1, date: "1999", title: "title1", text: "text1", source: "source 1" }
const card_2 = { image: img_2, date: "2999", title: "title2", text: "loremipsum loremipsum loremipsum loremipsum loremipsum", source: "source 2" }
const card_3 = { image: img_3, date: "3999", title: "title3", text: "text3", source: "source 3" }
const card_4 = { image: img_4, date: "4999", title: "title4", text: "text4", source: "source 4" }
const card_5 = { image: img_5, date: "5999", title: "title5", text: "loremipsum", source: "source 5" }
function NewsCardList() {

    return (
        <ul className="card-list">
            <NewsCard
                card={card_1}
            />
            <NewsCard
                card={card_2}
            />
            <NewsCard
                card={card_3}
            />
        </ul>
    );
}

export default NewsCardList;
