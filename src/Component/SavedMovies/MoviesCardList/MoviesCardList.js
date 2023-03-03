import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
    <section className="cards">
        <ul className="cards__list">
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
        </ul>
        <div className="cards__block">
        </div>
      </section>
    );
  }
  
export default MoviesCardList;