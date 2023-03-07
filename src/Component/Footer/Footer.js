import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__info">
                <p className="footer__text grey-text">© 2023</p>
                <div className="footer__block">
                    <a href="https://practicum.yandex.ru/" target="_blank" className="footer__text">Яндекс.Практикум</a>
                    <a href="https://github.com/" target="_blank" className="footer__text">GitHub</a>
                </div>
            </div>
        </footer>
    );
  }
  
export default Footer;