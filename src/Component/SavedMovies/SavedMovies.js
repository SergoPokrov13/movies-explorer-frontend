import React from 'react';
import SearchForm from "../Movies/SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from "../Footer/Footer";

function SavedMovies({movies}) {
    return (
        <div className="Movies">
            <Navigation/>
            <main className="main">
            <SearchForm/>
            <MoviesCardList movies={movies}/>
            </main>
            <Footer/>
        </div>
    );
  }
  
export default SavedMovies;