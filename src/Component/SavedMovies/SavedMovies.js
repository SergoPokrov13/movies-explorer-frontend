import React from 'react';
import { useEffect } from 'react';
import SearchForm from "../Movies/SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from "../Footer/Footer";
import useMoviesFilter from '../hooks/useMovieFilter';

function SavedMovies({myMovies, isMoviesLoaded, onRemoveMovie}) {

    const {
        filter,
        setIsShort,
        filteredList,
        isShort,
        searchString
      } = useMoviesFilter();
    
      useEffect(() => {
        const shortMoviesFilter = JSON.parse(localStorage.getItem('myShortMovies'));
        const searchStringFilter = JSON.parse(localStorage.getItem('mySearchString'));
        if (searchStringFilter) {
          filter(searchStringFilter, myMovies);
          setIsShort(shortMoviesFilter);
        } else {
          filter('', myMovies);
          setIsShort(shortMoviesFilter);
        }
      }, [filter, setIsShort, myMovies]);
    
      function handleSearch(searchValue) {
        filter(searchValue, myMovies);
        localStorage.setItem('mySearchString', JSON.stringify(searchValue));
        searchValue = '';
      }
    
      function handleChangeCheckbox() {
        localStorage.setItem('myShortMovies', JSON.stringify(!isShort));
        setIsShort(!isShort);
      }

    return (
        <div className="Movies">
            <Navigation/>
            <main className="main">
            <SearchForm
              searchString={searchString}
              checkbox={isShort}
              onSubmit={handleSearch}
              onChangeCheckbox={handleChangeCheckbox} />
             <MoviesCardList
              searchString={searchString}
              movies={filteredList}
              isMoviesLoaded={isMoviesLoaded}
              onRemoveMovie={onRemoveMovie}
            />
            </main>
            <Footer/>
        </div>
    );
  }
  
export default SavedMovies;