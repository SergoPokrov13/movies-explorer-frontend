import React from 'react';
import Techs from '../Techs/Techs';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import { Link } from 'react-router-dom';
function NavTab() {
    return (
        <div className="header__links">
            <Link to={AboutProject} className="header__button-link button" type="button">О проекте</Link>
            <Link to={Techs} className="header__button-link button" type="button">Технологии</Link>
            <Link to={AboutMe} className="header__button-link button" type="button">Студент</Link>
        </div>
    );
  }
  
export default NavTab;