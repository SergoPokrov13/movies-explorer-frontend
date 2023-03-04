import React from 'react';
import SearchForm from "../Movies/SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies() {
    return (
        <div className="Movies">
            <Navigation/>
            <main className="main">
            <SearchForm/>
            <MoviesCardList/>
            </main>
            <Footer/>
        </div>
    );
  }
  
export default SavedMovies;