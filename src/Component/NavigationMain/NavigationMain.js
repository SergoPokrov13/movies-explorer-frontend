import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function NavigationMain() {
    return (
        <nav className="navmenu">
            <div className="navmenu__block">
             <img className="logo" src={logo} alt="Логотип"/>
             <div className="navmenu__links no-swap">
                <Link to="/signup"><button className="navmenu__button-signup button" type="button">Регистрация</button></Link>
                <Link to="/signin"><button className="navmenu__button-signin button" type="button">Войти</button></Link>
             </div>
            </div>
        </nav>
    );
  }
  
export default NavigationMain;