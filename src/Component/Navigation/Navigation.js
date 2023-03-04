import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Navigation() {
    
    function AddClass(){
        document.querySelector('.logo').classList.toggle('active');
        document.querySelector('.navmenu__burger').classList.toggle('active');
        document.querySelector('.span').classList.toggle('active');
        document.querySelector('.navmenu__buttons').classList.toggle('active');
        document.querySelector('.navmenu__button-account').classList.toggle('active');
    }
    return (
        <div className="navmenu">
        <div className="navmenu__block">
            <div className="navmenu__block-image">
            <Link to="/"><img className="logo" src={logo} alt="Логотип"/></Link>
            <div className="navmenu__burger" onClick={AddClass}>
                <span className="span"></span>
            </div>
                <div className="navmenu__buttons">
                    <div className="navmenu__links">
                        <Link to="/"><button className="navmenu__button-glav button" type="button">Главная</button></Link>
                        <Link to="/movies"><button className="navmenu__button-film button line" type="button">Фильмы</button></Link>
                        <Link to="/saved-movies"><button className="navmenu__button-likefilm  button" type="button">Сохранённые фильмы</button></Link>
                    </div>
                        <Link to="/profile"><button className="navmenu__button-account button" type="button"></button></Link>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
export default Navigation;