import React from 'react';
function NavTab() {
    return (
        <div className="header__links">
            <a href="#info" className="header__button-link button" type="button">О проекте</a>
            <a href="/#techs" className="header__button-link button" type="button">Технологии</a>
            <a href="/#student" className="header__button-link button" type="button">Студент</a>
        </div>
    );
  }
  
export default NavTab;