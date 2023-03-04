import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
    <section className="cards">
        <ul className="cards__list">
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
        </ul>
        <div className="cards__block">
            <button className="cards__button-next button" type="button">Ещё</button>
        </div>
      </section>
    );
  }
  
export default MoviesCardList;