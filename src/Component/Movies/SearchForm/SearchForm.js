import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return (
    <section className="search">
        <div className="search__block-search">
          <input className="search__input" placeholder="Фильм"/>
          <button className="search__button-search button"></button>
        </div>
        <FilterCheckbox/>
      </section>
    );
  }
  
export default SearchForm;