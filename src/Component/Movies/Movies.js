import { React, useEffect, useState } from "react";
import filterMovies from "../../utils/filterMovies";
// import useMovieFilter from "../hooks/useMovieFilter";
import SearchForm from "./SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi"

function Movies({ loggedIn}) {
    const [movies, setMovies] = useState([]);
    const [isMoviesLoaded, setIsMoviesLoaded] = useState(true);
  
    const [searchString, setSearchString] = useState('');
    const [shortMovies, setShortMovies] = useState(false);
    const [filteredMovies, setFilteredMovies] = useState([]);
  
    useEffect(() => {
      console.log('mounted movies');
      const moviesFilter = JSON.parse(localStorage.getItem('movies'));
      const shortMoviesFilter = JSON.parse(localStorage.getItem('shortMovies'));
      const searchStringFilter = JSON.parse(localStorage.getItem('searchString'));
      if (moviesFilter && searchStringFilter) {
        setMovies(moviesFilter);
        setShortMovies(shortMoviesFilter);
        setSearchString(searchStringFilter);
        setFilteredMovies(filterMovies(searchStringFilter, shortMoviesFilter, moviesFilter));
      }
    }, []);
  
    function handleSearch(searchValue) {
      if (!movies.length) {
        setIsMoviesLoaded(false);
        moviesApi.getMovies()
          .then(data => {
            console.log(data);
            localStorage.setItem('movies', JSON.stringify(data));
            setMovies(data);
            setFilteredMovies(filterMovies(searchValue, shortMovies, data));
  
          })
          .catch(console.log)
          .finally(() => setIsMoviesLoaded(true));
      } else {
        setFilteredMovies(filterMovies(searchValue, shortMovies, movies));
      }
      setSearchString(searchValue);
      localStorage.setItem('searchString', JSON.stringify(searchValue));
      localStorage.setItem('shortMovies', JSON.stringify(shortMovies));
    }
  
    function handleChangeCheckbox() {
      localStorage.setItem('shortMovies', JSON.stringify(!shortMovies));
      setFilteredMovies(filterMovies(searchString, !shortMovies, movies));
      setShortMovies(!shortMovies);
    }
  
    return (
        <div className="Movies">
            <Navigation />
            <main className="main">
            <SearchForm
              searchString={searchString}
              checkbox={shortMovies}
              onSubmit={handleSearch}
              onChangeCheckbox={handleChangeCheckbox}
            />
            {isMoviesLoaded
              ? <MoviesCardList movies={filteredMovies} />
              : <Preloader />
            }
            </main>
            <Footer/>
        </div>
    );
  }
  
export default Movies;