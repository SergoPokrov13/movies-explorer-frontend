import React from 'react';
import me from "../../../images/me.jpg";

function AboutMe() {
    return (
            <section className="student" id='student'>
                <h2 className="title">Студент</h2>
                <div className="student__info">
                    <div className="student__block-info">
                        <p className="student__name">Сергей</p>
                        <p className="student__age">Фронтенд-разработчик, 16 лет</p>
                        <p className="student__about">Я родился в городе Удомля, живу в городе Иваново. Я кандидат в мастера спрта по каратэ, увлекаюсь баскетболом. Начал кодить в 2019 году.</p>
                        <a className="student__link button" href="https://github.com/SergoPokrov13" target="_blank">Github</a>
                    </div>
                    <img className="student__block-img" src={me} alt="Моя фотография"/>
                </div>
            </section>
    );
  }
  
export default AboutMe;
  