import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"

function Register() {
    return (
        <section className="register">
          <div className="register__block">
            <Link to="/"><img className="logo" src={logo} alt="Логотип"/></Link>
            <h2 className="register__text">Добро пожаловать!</h2>
            </div>
            <form className="form" action="">
              <div className="form__input-block">
                <p className="form__input-name">Имя</p>
                <input type="text" className="form__input input-name"/>
              </div>
              <div className="form__input-block">
                <p className="form__input-name">E-mail</p>
                <input type="email" className="form__input input-email"/>
              </div>
              <div className="form__input-block">
                <p className="form__input-name">Пароль</p>
                <input type="password" className="form__input input-password"/>
              </div>
              <div className="register__block">
                <button className="form__button-submit button" type="submit">Зарегистрироваться</button>
                <p className="form__text">Уже зарегистрированы? <Link to="/signin"><a className="form__link button" href="/#">Войти</a></Link></p>
              </div>
            </form>
        </section>
    );
  }
  
export default Register;