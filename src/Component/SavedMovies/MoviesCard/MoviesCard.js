import React from 'react';
import { useState } from 'react';
import card from "../../../images/card.png"
import icon from "../../../images/icon.svg"

function MoviesCard() {
  const [cardAcive, setCardAcive] = useState(false);
    return (
          <li className="card" onClick={()=> setCardAcive(!cardAcive)}>
            <img className={`card__icon ${cardAcive ? 'active' : ''}`} src={icon} alt="Иконка" />
            <img className="card__image" src={card} alt="Карточка"/>
            <div className="card__info">
              <p className="card__name">33 слова о дизайне</p>
              <p className="card__time">1ч 17м</p>
            </div>
          </li>
    );
  }
  
export default MoviesCard;