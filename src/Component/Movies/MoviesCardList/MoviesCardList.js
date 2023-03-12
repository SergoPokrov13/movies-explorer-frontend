import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({movies}) {

    return (
    <section className="cards">
        {movies.length
        ? <ul className="cards__list">
            {movies.map(movie => {
              return <li key={movie.id} className="card-list__item">
                <MoviesCard movie={movie} />
              </li>
            })}
          </ul>
        : <p className="card-list__info">Ничего не найдено</p>
      }
        <div className="cards__block">
            {/* <button className="cards__button-next button" type="button">Ещё</button> */}
        </div>
      </section>
    );
  }
  
export default MoviesCardList;


