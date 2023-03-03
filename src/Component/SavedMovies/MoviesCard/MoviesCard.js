import card from "../../../images/card.png"

function MoviesCard() {
    return (
          <li className="card">
            <img className="card__image" src={card} alt="Карточка"/>
            <div className="card__info">
              <p className="card__name">33 слова о дизайне</p>
              <p className="card__time">1ч 17м</p>
            </div>
          </li>
    );
  }
  
export default MoviesCard;