import {React, useState} from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"
const validator = require('validator');

function Login({onLogin, message}) {
  const [inputsValue, setInputsValue] = useState({ email: '', password: '' });
  const [inputsValidity, setInputsValidity] = useState({ email: false, password: false });
  const [inputsError, setInputsEror] = useState('');
  function handleChange({ target: { name, value, validity, } }) {
    setInputsValue(prevStat => ({ ...prevStat, [name]: value }));
    if(name === 'password'){
      setInputsValidity(prevStat => ({ ...prevStat, [name]: validity.valid }));
    }
    
    if(name === 'email'){
      if(validator.isEmail(value)){
        setInputsValidity(prevStat => ({ ...prevStat, [name]: validity.valid }));
        setInputsEror('')
      }else{
        setInputsEror('Введен некорректный email')
      }
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = inputsValue;
    onLogin({ email, password });
  }

    return (
        <section className="register">
          <div className="register__block">
            <Link to="/"><img className="logo" src={logo} alt="Логотип"/></Link>
            <h2 className="register__text">Рады видеть!</h2>
            </div>
            <form className="login__form" onSubmit={handleSubmit}>
              <div className="form__input-block">
                <p className="form__input-name">E-mail</p>
                <input
                required
                type="email"
                className={`form__input ${inputsValidity.email ? "" : "form__input_error"}`}
                name="email"
                onChange={handleChange}
                value={inputsValue.email}
                placeholder="Введите ваш email"
                />
              <span className="register__error">{inputsError}</span>
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
                <button className="form__button-submit button signin" type="submit">Войти</button>
                <p className="form__text">Ещё не зарегистрированы? <Link to="signup"className="form__link button" href="/#">Регистрация</Link></p>
              </div>
            </form>
        </section>
    );
  }
  
export default Login;