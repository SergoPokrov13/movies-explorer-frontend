import {React, useState} from 'react';
import { useLocation } from "react-router-dom";

function MoviesCard({ movie, onSaveMovie, onRemoveMovie, isSaved }) {
  const [saved, setSaved] = useState(isSaved);
  const { pathname } = useLocation();

  function durationToString(duration) {
    const hours = Math.floor(duration / 60);
    const minuts = duration % 60;
    return `${hours ? hours + 'ч ' : ''}${minuts}м`
  }

  function handleToggle() {
    if (saved) {
      onRemoveMovie(movie);
    } else {
      onSaveMovie(movie);
    }
    setSaved(!saved);
  }

  function handleRemove() {
    onRemoveMovie(movie);
  }

    return (
          <div className="card">
            <a className='card__link' href={movie.trailerLink ? movie.trailerLink : ''} target="_blank"><img className="card__image" src={movie.thumbnail ? movie.thumbnail : "https://api.nomoreparties.co" + movie.image.url}  alt="Карточка" /></a>
            <div className="card__info">
              <p className="card__name">{movie.nameRU}</p>
              {pathname === '/saved-movies'
               ? <button className="card__remove" type="button" onClick={handleRemove} />
               : <button className={`card__save ${saved ? 'card__save_saved' : ''}`} type="button" onClick={handleToggle} />
              }
              <p className="card__time">{durationToString(movie.duration)}</p>
            </div>
          </div>
    );
  }
  
export default MoviesCard;

