import React from 'react';
import link from "../../../images/link.svg";

function Portfolio() {
    return (
            <section className="portfolio">
                <p className="portfolio__title">Портфолио</p>
                <div className="portfolio__web">
                    <p className="portfolio__web_name">Статичный сайт</p>
                    <a className="portfolio__web_link button" href="/#"><img src={link} alt=""/></a>
                </div>
                <div className="portfolio__web">
                    <p className="portfolio__web_name">Адаптивный сайт</p>
                    <a className="portfolio__web_link button" href="/#"><img src={link} alt=""/></a>
                </div>
                <div className="portfolio__web">
                    <p className="portfolio__web_name">Одностраничное приложение</p>
                    <a className="portfolio__web_link button" href="/#"><img src={link} alt=""/></a>
                </div>
            </section>
    );
  }
  
export default Portfolio;