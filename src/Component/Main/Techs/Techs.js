import React from 'react';
function Techs() {
  return (
        <section className="technologies">
            <h2 className="title black-line">Технологии</h2>
            <p className="technologies__title">7 технологий</p>
            <p className="technologies__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="technologies__buttons">
                <button className="technologies__button" type="button">HTML</button>
                <button className="technologies__button" type="button">CSS</button>
                <button className="technologies__button" type="button">JS</button>
                <button className="technologies__button" type="button">React</button>
                <button className="technologies__button" type="button">Git</button>
                <button className="technologies__button" type="button">Express.js</button>
                <button className="technologies__button" type="button">mongoDB</button>
            </div>
        </section>
  );
}

export default Techs;
