import React from 'react';
import link from "../../../images/link.svg";

function Portfolio() {
    return (
            <section className="portfolio">
                <p className="portfolio__title">Портфолио</p>
                <a href="https://sergopokrov13.github.io/how-to-learn/" target="_blank" className="portfolio__web button">
                    <p className="portfolio__web_name">Статичный сайт</p>
                    <img className="portfolio__web_link" src={link} alt=""/>
                </a>
                <a href="https://sergopokrov13.github.io/russian-travel/" target="_blank"  className="portfolio__web button">
                    <p className="portfolio__web_name">Адаптивный сайт</p>
                    <img className="portfolio__web_link" src={link} alt=""/>
                </a>
                <a href="http://mesto.full.sergey.nomoredomainsclub.ru/" target="_blank"  className="portfolio__web button">
                    <p className="portfolio__web_name">Одностраничное приложение</p>
                    <img className="portfolio__web_link" src={link} alt=""/>
                </a>
            </section>
    );
  }
  
export default Portfolio;