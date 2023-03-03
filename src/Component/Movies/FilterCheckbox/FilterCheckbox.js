function FilterCheckbox() {
    return (
        <div className="search__block-switch">
          <label className="switch">
            <input type="checkbox" defaultChecked readOnly/>
            <span className="slider round"></span>
          </label>
          <p className="search__text">Короткометражки</p>
        </div>
    );
  }
  
export default FilterCheckbox;