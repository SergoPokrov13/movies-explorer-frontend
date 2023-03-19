import { React, useEffect, useState } from "react";
// import filterMovies from "../../utils/filterMovies";
import useMovieFilter from "../hooks/useMovieFilter";
import SearchForm from "./SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi"

function Movies({ onSaveMovie, onRemoveMovie }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { filter, setIsShort, filteredList, isShort, searchString } = useMovieFilter();

  useEffect(() => {
    const moviesFilter = JSON.parse(localStorage.getItem('movies'));
    const shortMoviesFilter = JSON.parse(localStorage.getItem('shortMovies'));
    const searchStringFilter = JSON.parse(localStorage.getItem('searchString'));
    if (moviesFilter) {
      setMovies(moviesFilter);
      filter(searchStringFilter, moviesFilter)
      setIsShort(shortMoviesFilter);
    }
  }, [filter, setIsShort]);

  function handleSearch(searchValue) {
    if (!movies.length) {
      setIsLoading(true);
      moviesApi.getMovies()
        .then(data => {
          setMovies(data);
          filter(searchValue, data);
          localStorage.setItem('movies', JSON.stringify(data));
          searchValue = '';
        })
        .catch(console.log)
        .finally(() => setIsLoading(false));
    } else {
      filter(searchValue, movies);
      searchValue = '';
    }
    localStorage.setItem('searchString', JSON.stringify(searchValue));
  }

  function handleChangeCheckbox() {
    localStorage.setItem('shortMovies', JSON.stringify(!isShort));
    setIsShort(!isShort);
  }

  
    return (
        <div className="Movies">
            <Navigation />
            <main className="main">
            <SearchForm
              searchString={searchString}
              checkbox={isShort}
              onSubmit={handleSearch}
              onChangeCheckbox={handleChangeCheckbox}
            />
            {isLoading
              ? <Preloader />
              : <MoviesCardList
                movies={filteredList}
                onSaveMovie={onSaveMovie}
                onRemoveMovie={onRemoveMovie}
              />
            }
            </main>
            <Footer/>
        </div>
    );
  }
  
export default Movies;