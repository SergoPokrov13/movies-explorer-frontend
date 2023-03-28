import React, { useEffect } from 'react';
import { useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";
import Navigation from "../Navigation/Navigation";
import { useFormValidation } from "../hooks/useFormValidation";

function Profile({ onSignout, onUpdate, message }) {
    const currentUser = useContext(CurrentUserContext);
    const {
      values,
      handleChange,
      isValid,
      errors,
      setIsValid,
    } = useFormValidation({ name: currentUser.name, email: currentUser.email });

    function handleBtnSignout() {
        onSignout();
      }
    
      const handleSubmit = (evt) => {
        evt.preventDefault();
        onUpdate({ name: values.name, email: values.email });
        setIsValid(false)
    }

    return (
        <div className="root">
            <Navigation/>
            <form className="root" onSubmit={handleSubmit}>
            <section className="account">
                <h2 className="account__name">Привет, {currentUser.name}!</h2>
                <div className="account__info" >
                    <div className="account__info-name">
                        <p className="account__task">Имя</p>
                        <input
                            required
                            type="text"
                            className="account__result"
                            id="profile-name"
                            placeholder="Введите ваше имя"
                            name="name"
                            value={values.name ? values.name : ''}
                            onChange={handleChange}
                            minLength="2"
                            maxLength="30"
                        /> 
                    </div>
                    {errors.name && <span className="account__error">{errors.name}</span>}
                    <div className='account-line'></div>
                    <div className="account__info-name">
                        <p className="account__task">E-mail</p>
                        <input
                            required
                            type="email"
                            className="account__result"
                            id="profile-email"
                            placeholder="Введите ваш e-mail"
                            name="email"
                            value={values.email ? values.email : ''}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.email && <span className="account__error">{errors.email}</span>}
                </div>
                {message && <span className="account__error">{message}</span>}
            </section>
            <section className="edit"> 
                <button
                type="submit"
                className={`edit__button-edit button ${isValid ? '' : 'edit__button_disable'}`}
                disabled={!isValid}
                >Редактировать</button>
                <button type="button" className="edit__button-exit button" onClick={handleBtnSignout}>Выйти из аккаунта</button>
            </section>
            </form>
        </div>
    );
  }
  
export default Profile;