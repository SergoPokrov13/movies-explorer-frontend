import {React, useState, useEffect} from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormValidation } from "../../hooks/useFormValidation";

function SearchForm({ searchString, checkbox, onSubmit, onChangeCheckbox }) {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const {
    values,
    handleChange,
    isValid,
    resetForm
  } = useFormValidation();

  useEffect(() => {
    resetForm({ searchString }, {}, true)
  }, [resetForm, searchString]);

  function clearForm(){
    values.searchString = '';
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isValid) {
      setShowErrorMessage(false);
      onSubmit(values.searchString);
      clearForm()
    } else {
      setShowErrorMessage(true);
    }
  }

    return (
    <section className="search">
        <form className="search__block-search" onSubmit={handleSubmit}>
          <input
              required
              type="text"
              name="searchString"
              className="search__input"
              placeholder="Фильм"
              value={values.searchString ? values.searchString : ''}
              onChange={handleChange}
            />
            {showErrorMessage
              ? <span className="serach-form__error">Нужно ввести ключевое слово</span>
              : ''
            }
          <button className="search__button-search button" type="submit"></button>
        </form>
        <FilterCheckbox
          label="Короткометражки"
          checked={checkbox}
          onChange={onChangeCheckbox}
        />
      </section>
    );
  }
  
export default SearchForm;