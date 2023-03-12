import {React, useState} from 'react';
import { useLocation } from "react-router-dom";
import icon from "../../../images/icon.svg"
import del from "../../../images/del.svg"

function MoviesCard({movie}) {
  const [cardAcive, setCardAcive] = useState(false);
  const { pathname } = useLocation();

    return (
          <li className="card">
            <img className="card__image" src={`https://api.nomoreparties.co${movie.image.url}`}  alt="Карточка" onClick={()=> setCardAcive(!cardAcive)}/>
            <div className="card__info">
              <p className="card__name">{movie.nameRU}</p>
              {pathname === '/saved-movies'
                ? <img className="card__del" src={del} alt="Иконка" />
                : <img className={`card__icon ${cardAcive ? 'active' : ''}`} src={icon} alt="Иконка"  />
              }
              <p className="card__time">{movie.duration} мин</p>
            </div>
          </li>
    );
  }
  
export default MoviesCard;

