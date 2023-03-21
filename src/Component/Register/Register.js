import {React, useState} from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"

function Register({ onRegister, message }) {
  const [inputsValue, setInputsValue] = useState({ name: '', email: '', password: '' });
  const [inputsValidity, setInputsValidity] = useState({ name: false, email: false, password: false });
  const [inputsErrorMessage, setInputsErrorMessage] = useState({ name: '', email: '', password: '' });
  function handleChange({ target: { name, value, validity, validationMessage } }) {
    setInputsValue(prevStat => ({ ...prevStat, [name]: value }));
    setInputsValidity(prevStat => ({ ...prevStat, [name]: validity.valid }));
    setInputsErrorMessage(prevStat => ({ ...prevStat, [name]: validationMessage }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const {name, email, password} = inputsValue;
    onRegister({name, email, password});
  }
    return (
        <section className="register">
          <div className="register__block">
            <Link to="/"><img className="logo" src={logo} alt="Логотип"/></Link>
            <h2 className="register__text">Добро пожаловать!</h2>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__input-block">
                <p className="form__input-name">Имя</p>
                <input
                required
                type="text"
                className={`form__input ${inputsValidity.name ? "" : "form__input_error"}`}
                name="name"
                onChange={handleChange}
                value={inputsValue.name}
                placeholder="Введите ваше имя"
                />
                <span className="register__error">{inputsErrorMessage.name}</span>
              </div>
              <div className="form__input-block">
                <p className="form__input-name">E-mail</p>
                <input
                required
                type="email"
                className={`form__input  ${inputsValidity.email ? "" : "form__input_error"}`}
                name="email"
                onChange={handleChange}
                value={inputsValue.email}
                placeholder="Введите ваш email"
                />
                <span className="register__error">{inputsErrorMessage.email}</span>
              </div>
              <div className="form__input-block">
                <p className="form__input-name">Пароль</p>
                <input
                required
                type="password"
                className={`form__input ${inputsValidity.password ? "" : "form__input_error"}`}
                name="password"
                onChange={handleChange}
                value={inputsValue.password}
                placeholder="Введите ваш пароль"
                autoComplete="on"
                />
                {message && <span className="account__error">{message}</span>}
              </div>
              <div className="register__block">
                <button className="form__button-submit button" type="submit">Зарегистрироваться</button>
                <p className="form__text">Уже зарегистрированы? <Link to="/signin" className="form__link button" href="/#">Войти</Link></p>
              </div>
            </form>
        </section>
    );
  }
  
export default Register;