import React from 'react';
function FilterCheckbox({ name, checked, onChange, label = '' }) {
    return (
        <form className="search__block-switch">
          <label className="switch">
            <input
            type="checkbox"
            className="filter-checkbox__input"
            name={name}
            checked={checked}
            onChange={onChange}
            />
            <span
            type="button"
            className={`filter-checkbox__switch ${checked ? 'filter-checkbox__switch_on' : ''}`}
            ></span>
          </label>
          <p className="search__text">{label}</p>
        </form>
    );
  }
  
export default FilterCheckbox;