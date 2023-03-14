import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import useCounterCard from "../../hooks/useCounterCard";

function MoviesCardList({ movies, onSaveMovie, onRemoveMovie }) {
  const { count, step } = useCounterCard();

  function handleAnother() {
    step()
  }

    return (
    <section className="cards">
        {movies.length
        ? <ul className="cards__list">
           {movies.slice(0, count).map(movie => {
            return (
              <li key={movie.id ? movie.id : movie['_id']} className="card-list__item">
                <MoviesCard movie={movie} onSaveMovie={onSaveMovie} onRemoveMovie={onRemoveMovie} isSaved={false} />
              </li>
            )
          })}
        </ul>
        : <p className="card-list__info">Ничего не найдено</p>
      }
        <div className="cards__block">
        {movies.length >= count
        ? <button className="cards__button-next button" type="button" onClick={handleAnother}>Еще</button>
        : ''
      }
        </div>
      </section>
    );
  }
  
export default MoviesCardList;


