import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"

function Login() {
    return (
        <section className="register">
          <div className="register__block">
            <Link to="/"><img className="logo" src={logo} alt="Логотип"/></Link>
            <h2 className="register__text">Рады видеть!</h2>
            </div>
            <form className="form" action="">
              <div className="form__input-block">
                <p className="form__input-name">E-mail</p>
                <input type="email" className="form__input input-email"/>
              </div>
              <div className="form__input-block">
                <p className="form__input-name">Пароль</p>
                <input type="password" className="form__input input-password"/>
              </div>
              <div className="register__block">
                <button className="form__button-submit button signin" type="submit">Войти</button>
                <p className="form__text">Ещё не зарегистрированы? <Link to="signup"><a className="form__link button" href="/#">Регистрация</a></Link></p>
              </div>
            </form>
        </section>
    );
  }
  
export default Login;