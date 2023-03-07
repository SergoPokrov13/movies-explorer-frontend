import React from 'react';
function AboutProject() {
    return (
            <section className="info" id='info'>
                <h2 className="title">О проекте</h2>
                <div className="info__columns">
                    <div className="info__block">
                        <p className="info__title-text">Дипломный проект включал 5 этапов</p>
                        <p className="info__subtitle-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="info__block">
                        <p className="info__title-text">На выполнение диплома ушло 5 недель</p>
                        <p className="info__subtitle-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="info__line">
                    <div className="info__block-back">
                        <div className="info__block-backround"><p className="info__text-week">1 неделя</p></div>
                        <p className="info__text-view">Back-end</p>
                    </div>
                    <div className="info__block-front">
                        <div className="info__block-backround black"><p className="info__text-week white">4 недели</p></div>
                        <p className="info__text-view">Front-end</p>
                    </div>
                </div>
            </section>
    );
  }
  
export default AboutProject;
  