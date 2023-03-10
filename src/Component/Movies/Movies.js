import React from 'react';
import SearchForm from "./SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies() {
    return (
        <div className="Movies">
            <Navigation />
            <main className="main">
            <SearchForm/>
            <MoviesCardList />
            </main>
            <Footer/>
        </div>
    );
  }
  
export default Movies;