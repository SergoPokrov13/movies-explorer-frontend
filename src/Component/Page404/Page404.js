import React from 'react';
import { Link } from 'react-router-dom';

function Page404() {
    return (
    <section className="page404">
      <h2 className='page404__title'>404</h2>
      <p className='page404__subtitle'>Страница не найдена</p>
      <Link className='page404__link' to="/">Назад</Link>
    </section>
    );
  }
  
export default Page404;