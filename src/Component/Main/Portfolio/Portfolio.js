import React from 'react';
import { Link } from 'react-router-dom';
import link from "../../../images/link.svg";

function Portfolio() {
    return (
            <section className="portfolio">
                <p className="portfolio__title">Портфолио</p>
                <Link className="portfolio__web button">
                    <p className="portfolio__web_name">Статичный сайт</p>
                    <img className="portfolio__web_link" src={link} alt=""/>
                </Link>
                <Link className="portfolio__web button">
                    <p className="portfolio__web_name">Адаптивный сайт</p>
                    <img className="portfolio__web_link" src={link} alt=""/>
                </Link>
                <Link className="portfolio__web button">
                    <p className="portfolio__web_name">Одностраничное приложение</p>
                    <img className="portfolio__web_link" src={link} alt=""/>
                </Link>
            </section>
    );
  }
  
export default Portfolio;